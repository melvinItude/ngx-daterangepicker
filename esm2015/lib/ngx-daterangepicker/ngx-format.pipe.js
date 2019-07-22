/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import * as dateFns from 'date-fns';
import { locales } from './constants';
export class NgxFormatPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        /** @type {?} */
        const options = {};
        if (args && args[1] && locales.hasOwnProperty(args[1])) {
            options.locale = locales[args[1]];
        }
        return dateFns.format(value, args[0] || 'DD-MM-YYYY', options);
    }
}
NgxFormatPipe.decorators = [
    { type: Pipe, args: [{
                name: 'ngxFormat'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZvcm1hdC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRhdGVyYW5nZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZGF0ZXJhbmdlcGlja2VyL25neC1mb3JtYXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUt0QyxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBRXhCLFNBQVMsQ0FBQyxLQUFXLEVBQUUsR0FBRyxJQUFnQjs7Y0FDbEMsT0FBTyxHQUFRLEVBQUU7UUFDdkIsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEQsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkM7UUFFRCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7O1lBWkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxXQUFXO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBsb2NhbGVzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICduZ3hGb3JtYXQnXG59KVxuZXhwb3J0IGNsYXNzIE5neEZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IERhdGUsIC4uLmFyZ3M6IEFycmF5PGFueT4pOiBhbnkge1xuICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHt9O1xuICAgIGlmIChhcmdzICYmIGFyZ3NbMV0gJiYgbG9jYWxlcy5oYXNPd25Qcm9wZXJ0eShhcmdzWzFdKSkge1xuICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVzW2FyZ3NbMV1dO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRlRm5zLmZvcm1hdCh2YWx1ZSwgYXJnc1swXSB8fCAnREQtTU0tWVlZWScsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=