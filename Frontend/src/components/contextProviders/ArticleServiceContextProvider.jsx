import { createContext, useContext } from "react";

const ArticleServiceContext = createContext();

export function ArticleServiceProvider({articleService, children }) {
  return (
    <ArticleServiceContext.Provider value={articleService}>
      {children}
    </ArticleServiceContext.Provider>
  );
}

export const useArticleService = () => useContext(ArticleServiceContext);