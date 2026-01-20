import { TestArticlesService } from "./services/articles/TestArticlesService";
import { TestSecurityService } from "./services/security/TestSecurityService";
import { TestUserService } from "./services/users/TestUserService";
import { WebService } from "./services/web/WebService";

const baseUrl ="http://localhost:8080/api/"
export const articleService = new TestArticlesService(baseUrl+"articles");
export const usersService = new TestUserService(baseUrl+"users");
export const securityService = new TestSecurityService(baseUrl+"security");
export const webService = new WebService();
