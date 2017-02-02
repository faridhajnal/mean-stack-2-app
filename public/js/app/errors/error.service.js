import { EventEmitter } from "@angular/core";
import { Error } from "./error.model";
export var ErrorService = (function () {
    function ErrorService() {
        this.errorOcurred = new EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        var ErrorData = new Error(error.title, error.error.message);
        this.errorOcurred.emit(ErrorData);
    };
    return ErrorService;
}());
//# sourceMappingURL=error.service.js.map