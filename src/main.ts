import "./style.css";
import type { App } from "vue";
import {
  StarComponent,
  NameComponent,
  DateComponent,
  BoxComponent,
  ImageComponent,
  TableComponent,
  ComparedComponent,
  AverangeComponent,
  ReviewComponent,
  StarsByQuestions,
  PieComponent,
  BarComponent,
  ProgressBarComponent,
  SingleBarComponent,
  ServicesComponent,
  QuestionScoreComponent
} from "./components";

export default {
  install: (app: App) => {
    app.component("StarComponent", StarComponent);
    app.component("NameComponent", NameComponent);
    app.component("DateComponent", DateComponent);
    app.component("BoxComponent", BoxComponent);
    app.component("ImageComponent", ImageComponent);
    app.component("AverangeComponent", AverangeComponent);
    app.component("TableComponent", TableComponent);
    app.component("ComparedComponent", ComparedComponent);
    app.component("SingleBarComponent", SingleBarComponent);
    app.component("QuestionScoreComponent", QuestionScoreComponent);
    app.component("ReviewComponent", ReviewComponent);
    app.component("ComparedComponent", ComparedComponent);
    app.component("StarsByQuestions", StarsByQuestions);
    app.component("PieComponent", PieComponent);
    app.component("BarComponent", BarComponent);
    app.component("ProgressBarComponent", ProgressBarComponent);
    app.component("SingleBarComponent", SingleBarComponent);
    app.component("ServicesComponent", ServicesComponent);
  },
};

export {
  StarComponent,
  NameComponent,
  DateComponent,
  BoxComponent,
  ImageComponent,
  AverangeComponent,
  TableComponent,
  ComparedComponent,
  ReviewComponent,
  StarsByQuestions,
  PieComponent,
  BarComponent,
  ProgressBarComponent,
  SingleBarComponent,
  ServicesComponent,
  QuestionScoreComponent,
};
