import { run } from "./app/app";
import "./main.scss";
import { ComponentService } from "./app/component.service";
import { AlertService } from "./app/alert.service";

const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);