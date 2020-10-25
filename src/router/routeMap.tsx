import ArticlesView from "../components/views/Articles/Articles.view";
import ArticleView from "../components/views/Articles/Article.view";
import { IRoutemapItem } from "../interfaces/routes/routeMap";
import Wrapper from "../components/shared/Wrapper/Wrapper";

export const routeMap: Array<IRoutemapItem> = [
  {
    key: 1,
    path: "/article",
    component: ArticleView,
  },
  {
    key: 2,
    path: "/",
    component: ArticlesView,
  },
];
