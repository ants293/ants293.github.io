import ArticlesView from "../components/views/Articles/Articles.view";
import ArticleView from "../components/views/Articles/Article.view";
import { IRoutemapItem } from "../interfaces/routes/routeMap";
import Wrapper from "../components/shared/Wrapper/Wrapper";

export const routeMap: Array<IRoutemapItem> = [
  {
    path: "/article",
    component: () => Wrapper(ArticleView()),
  },
  {
    path: "/",
    component: () => Wrapper(ArticlesView()),
  },
];
