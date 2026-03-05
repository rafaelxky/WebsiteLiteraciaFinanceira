import { TestArticlesService } from "./services/articles/TestArticlesService";
import { LangService } from "./services/lang/LangService";
import { SecurityService } from "./services/security/SecurityService";
import { UserService } from "./services/users/UserService";
import { WebService } from "./services/web/WebService";

const baseUrl = "http://localhost:8080/api/"
export const articleService = new TestArticlesService(baseUrl+"articles");
export const usersService = new UserService(baseUrl+"user");
export const securityService = new SecurityService(baseUrl+"auth");
export const webService = new WebService();
export const langService = new LangService();
