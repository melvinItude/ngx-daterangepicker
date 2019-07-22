/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import * as dateFns from 'date-fns';
import { locales } from './constants';
var NgxFormatPipe = /** @class */ (function () {
    function NgxFormatPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    NgxFormatPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var options = {};
        if (args && args[1] && locales.hasOwnProperty(args[1])) {
            options.locale = locales[args[1]];
        }
        return dateFns.format(value, args[0] || 'DD-MM-YYYY', options);
    };
    NgxFormatPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'ngxFormat'
                },] }
    ];
    return NgxFormatPipe;
}());
export { NgxFormatPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZvcm1hdC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRhdGVyYW5nZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZGF0ZXJhbmdlcGlja2VyL25neC1mb3JtYXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV0QztJQUFBO0lBYUEsQ0FBQzs7Ozs7O0lBUkMsaUNBQVM7Ozs7O0lBQVQsVUFBVSxLQUFXO1FBQUUsY0FBbUI7YUFBbkIsVUFBbUIsRUFBbkIscUJBQW1CLEVBQW5CLElBQW1CO1lBQW5CLDZCQUFtQjs7O1lBQ2xDLE9BQU8sR0FBUSxFQUFFO1FBQ3ZCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RELE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7O2dCQVpGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsV0FBVztpQkFDbEI7O0lBV0Qsb0JBQUM7Q0FBQSxBQWJELElBYUM7U0FWWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBsb2NhbGVzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICduZ3hGb3JtYXQnXG59KVxuZXhwb3J0IGNsYXNzIE5neEZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IERhdGUsIC4uLmFyZ3M6IEFycmF5PGFueT4pOiBhbnkge1xuICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHt9O1xuICAgIGlmIChhcmdzICYmIGFyZ3NbMV0gJiYgbG9jYWxlcy5oYXNPd25Qcm9wZXJ0eShhcmdzWzFdKSkge1xuICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVzW2FyZ3NbMV1dO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRlRm5zLmZvcm1hdCh2YWx1ZSwgYXJnc1swXSB8fCAnREQtTU0tWVlZWScsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=