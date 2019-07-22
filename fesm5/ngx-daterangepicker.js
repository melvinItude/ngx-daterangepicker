import { forwardRef, Component, ElementRef, ChangeDetectorRef, ViewChild, Input, HostListener, Pipe, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { addDays, format, setDay, startOfMonth, endOfMonth, eachDay, getDate, getDay, isToday, isFirstDayOfMonth, isLastDayOfMonth, isSameDay, isWithinRange, subDays, isAfter, startOfDay, isBefore, subMonths, addMonths, addWeeks, startOfWeek, endOfWeek, addYears, startOfYear, endOfYear, subWeeks, subYears } from 'date-fns';
import * as es from 'date-fns/locale/es';
import * as en from 'date-fns/locale/en';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var locales = {
    es: es,
    en: en,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DATERANGEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NgxDateRangePickerComponent; })),
    multi: true
};
var NgxDateRangePickerComponent = /** @class */ (function () {
    function NgxDateRangePickerComponent(elementRef, cdr) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.defaultOptions = {
            theme: 'default',
            labels: ['Start', 'End'],
            locale: 'en',
            menu: [],
            dateFormat: 'DD-MM-YYYY',
            outputFormat: 'DD-MM-YYYY',
            outputType: 'string',
            startOfWeek: 1,
            date: null
        };
        this.onTouchedCallback = (/**
         * @return {?}
         */
        function () {
        });
        this.onChangeCallback = (/**
         * @return {?}
         */
        function () {
        });
    }
    Object.defineProperty(NgxDateRangePickerComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modelValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this.modelValue = value;
            this.onChangeCallback(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            return;
        }
        this.modelValue = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.arrowLeft = this.fromInput.nativeElement.offsetWidth;
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.opened = false;
        this.defaultOptions.date = {
            from: this.date,
            to: addDays(this.date, 1)
        };
        this.options = this.options || this.defaultOptions;
        this.initNames();
        if (this.options.range) {
            this.selectRange(this.options.menu.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return _this.options.range === item.alias;
            }))[0]);
        }
        else {
            if (!this.options.date) {
                this.options.date = this.defaultOptions.date;
            }
            this.selectDates(this.options.date);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.options = this.options || this.defaultOptions;
        if (this.options.date) {
            this.selectDates(this.options.date);
        }
        this.initNames();
    };
    /**
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.initNames = /**
     * @return {?}
     */
    function () {
        this.dayNames = [];
        for (var i = 1; i < 7; ++i) {
            this.dayNames.push(this.getDayOfWeek(i));
        }
        this.dayNames.push(this.getDayOfWeek(0));
    };
    /**
     * @param {?} day
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.getDayOfWeek = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        /** @type {?} */
        var date = new Date();
        /** @type {?} */
        var dayOfWeek = format(setDay(date, day, { weekStartsOn: 1 }), 'dd', { locale: locales[this.options.locale] });
        return dayOfWeek[0].toUpperCase() + dayOfWeek.substring(1);
    };
    /**
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.generateCalendar = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.days = [];
        /** @type {?} */
        var start = startOfMonth(this.date);
        /** @type {?} */
        var end = endOfMonth(this.date);
        /** @type {?} */
        var days = eachDay(start, end).map((/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            /** @type {?} */
            var startOfWeek = _this.options.startOfWeek;
            /** @type {?} */
            var endOfWeek = startOfWeek === 0 ? 6 : 0;
            return {
                date: d,
                day: getDate(d),
                weekday: getDay(d),
                startOfWeek: startOfWeek,
                endOfWeek: endOfWeek,
                today: isToday(d),
                firstMonthDay: isFirstDayOfMonth(d),
                lastMonthDay: isLastDayOfMonth(d),
                visible: true,
                from: isSameDay(_this.dateFrom, d),
                to: isSameDay(_this.dateTo, d),
                isWithinRange: isWithinRange(d, _this.dateFrom, _this.dateTo)
            };
        }));
        /** @type {?} */
        var prevMonthDayNum = getDay(start) - 1;
        /** @type {?} */
        var prevMonthDays = [];
        if (prevMonthDayNum > 0) {
            prevMonthDays = Array.from(Array(prevMonthDayNum).keys()).map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                /** @type {?} */
                var d = subDays(start, prevMonthDayNum - i);
                return {
                    date: d,
                    day: getDate(d),
                    weekday: getDay(d),
                    firstMonthDay: isFirstDayOfMonth(d),
                    lastMonthDay: isLastDayOfMonth(d),
                    today: false,
                    visible: false,
                    from: false,
                    to: false,
                    isWithinRange: false
                };
            }));
        }
        this.days = prevMonthDays.concat(days);
        if (this.options.outputType === 'object') {
            this.value = {
                from: format(this.dateFrom, this.options.outputFormat),
                to: format(this.dateTo, this.options.outputFormat)
            };
        }
        else {
            this.value =
                format(this.dateFrom, this.options.outputFormat) + "-" + format(this.dateTo, this.options.outputFormat);
        }
    };
    /**
     * @param {?} e
     * @param {?} selection
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.toggleCalendar = /**
     * @param {?} e
     * @param {?} selection
     * @return {?}
     */
    function (e, selection) {
        // Arrow position
        if (selection === 'from') {
            this.arrowLeft = this.fromInput.nativeElement.offsetWidth * 0.4;
        }
        else {
            this.arrowLeft = this.fromInput.nativeElement.offsetWidth + this.fromInput.nativeElement.offsetWidth * 0.4;
        }
        if (this.opened && this.opened !== selection) {
            this.opened = selection;
        }
        else {
            this.opened = this.opened ? false : selection;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.closeCalendar = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.opened = false;
    };
    /**
     * @param {?} e
     * @param {?} index
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.selectDate = /**
     * @param {?} e
     * @param {?} index
     * @return {?}
     */
    function (e, index) {
        e.preventDefault();
        /** @type {?} */
        var selectedDate = this.days[index].date;
        if ((this.getDate(this.options.minDate) &&
            !isAfter(startOfDay(selectedDate), this.getDate(this.options.minDate))) ||
            (this.getDate(this.options.maxDate) &&
                !isBefore(startOfDay(selectedDate), this.getDate(this.options.maxDate)))) {
            return;
        }
        if ((this.opened === 'to' && isBefore(selectedDate, this.dateFrom))) {
            this.opened = 'from';
        }
        if ((this.opened === 'from' && isAfter(selectedDate, this.dateTo))) {
            this.dateFrom = selectedDate;
            this.dateTo = selectedDate;
        }
        if (this.opened === 'from') {
            this.dateFrom = selectedDate;
            this.opened = 'to';
        }
        else if (this.opened === 'to') {
            this.dateTo = selectedDate;
            this.opened = 'from';
        }
        if (this.opened === 'from') {
            this.arrowLeft = this.fromInput.nativeElement.offsetWidth * 0.4;
        }
        else {
            this.arrowLeft = this.fromInput.nativeElement.offsetWidth + this.fromInput.nativeElement.offsetWidth * 0.4;
        }
        if (this.options.menu && this.options.menu.length > 0) {
            this.options.menu.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.active = false;
            }));
        }
        this.generateCalendar();
    };
    /**
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.prevMonth = /**
     * @return {?}
     */
    function () {
        this.date = subMonths(this.date, 1);
        this.generateCalendar();
    };
    /**
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.nextMonth = /**
     * @return {?}
     */
    function () {
        this.date = addMonths(this.date, 1);
        this.generateCalendar();
    };
    /**
     * @param {?} dates
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.selectDates = /**
     * @param {?} dates
     * @return {?}
     */
    function (dates) {
        this.dateFrom = this.getDate(dates.from);
        this.dateTo = this.getDate(dates.to);
        if (isAfter(this.dateFrom, this.dateTo)) {
            this.dateTo = this.dateFrom;
        }
        this.date = startOfDay(this.dateFrom);
        this.generateCalendar();
    };
    /**
     * @param {?} range
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.selectRange = /**
     * @param {?} range
     * @return {?}
     */
    function (range) {
        /** @type {?} */
        var today = startOfDay(new Date());
        /** @type {?} */
        var fromDate = today;
        /** @type {?} */
        var toDate = today;
        this.options.menu.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.active = item.alias === range.alias;
        }));
        /** @type {?} */
        var operand = range.operation.charAt(0) === '-' ? -1 : 1;
        /** @type {?} */
        var amount = Math.abs(parseInt(range.operation, 10));
        /** @type {?} */
        var ope = range.operation.match(/[d,w,m,y]t?/);
        /** @type {?} */
        var unit = ope.length > 0 ? ope[0] : '';
        switch (unit) {
            case 'm':
                if (amount) {
                    fromDate = addMonths(fromDate, amount * operand);
                    toDate = addMonths(fromDate, (amount - 1));
                }
                this.dateFrom = startOfMonth(fromDate);
                this.dateTo = endOfMonth(toDate);
                break;
            case 'w':
                if (amount) {
                    fromDate = addWeeks(fromDate, amount * operand);
                    toDate = addWeeks(fromDate, (amount - 1));
                }
                this.dateFrom = startOfWeek(fromDate, { weekStartsOn: this.options.startOfWeek });
                this.dateTo = endOfWeek(toDate, { weekStartsOn: this.options.startOfWeek });
                break;
            case 'y':
                if (amount) {
                    fromDate = addYears(fromDate, amount * operand);
                    toDate = addYears(fromDate, (amount - 1));
                }
                this.dateFrom = startOfYear(fromDate);
                this.dateTo = endOfYear(toDate);
                break;
            case 'd':
                if (amount) {
                    fromDate = addDays(fromDate, amount * operand);
                    toDate = addDays(fromDate, (amount - 1));
                }
                this.dateFrom = startOfDay(fromDate);
                this.dateTo = startOfDay(toDate);
                break;
            // From today
            case 'mt':
                if (operand < 0) {
                    fromDate = subMonths(today, amount);
                }
                else {
                    toDate = addMonths(today, amount);
                }
                this.dateFrom = fromDate;
                this.dateTo = toDate;
                break;
            case 'wt':
                if (operand < 0) {
                    fromDate = subWeeks(today, amount);
                }
                else {
                    toDate = addWeeks(today, amount);
                }
                this.dateFrom = fromDate;
                this.dateTo = toDate;
                break;
            case 'yt':
                if (operand < 0) {
                    fromDate = subYears(today, amount);
                }
                else {
                    toDate = addYears(today, amount);
                }
                this.dateFrom = fromDate;
                this.dateTo = toDate;
                break;
            default:
                if (operand < 0) {
                    fromDate = subDays(today, amount);
                }
                else {
                    toDate = addDays(today, amount);
                }
                this.dateFrom = fromDate;
                this.dateTo = toDate;
                break;
        }
        this.date = startOfDay(this.dateFrom);
        this.range = range.alias;
        this.generateCalendar();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.handleBlurClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var target = e.srcElement || e.target;
        if (!this.elementRef.nativeElement.contains(e.target) && !((/** @type {?} */ (target))).classList.contains('day-num')) {
            this.opened = false;
        }
    };
    /**
     * Method to open calendar
     */
    /**
     * Method to open calendar
     * @param {?=} opened
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.open = /**
     * Method to open calendar
     * @param {?=} opened
     * @return {?}
     */
    function (opened) {
        if (opened === void 0) { opened = 'from'; }
        this.toggleCalendar(null, opened);
    };
    /**
     * Method to close calendar
     */
    /**
     * Method to close calendar
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.close = /**
     * Method to close calendar
     * @return {?}
     */
    function () {
        this.opened = false;
    };
    /**
     * Method to toggle calendar
     */
    /**
     * Method to toggle calendar
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.toggle = /**
     * Method to toggle calendar
     * @return {?}
     */
    function () {
        if (!!this.opened) {
            this.close();
            return;
        }
        this.open();
    };
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.getDate = /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (!date) {
            return null;
        }
        if (date instanceof Date) {
            return startOfDay(date);
        }
        if (date instanceof Object && date.year && date.month && date.day) {
            return startOfDay(new Date(date.year, date.month - 1, date.day));
        }
        return null;
    };
    NgxDateRangePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-daterangepicker',
                    template: "<div class=\"ngx-daterangepicker\" [ngClass]=\"{ 'is-active': !!opened,\n                  'theme-green': options.theme === 'green',\n                  'theme-teal': options.theme === 'teal',\n                  'theme-cyan': options.theme === 'cyan',\n                  'theme-grape': options.theme === 'grape',\n                  'theme-red': options.theme === 'red',\n                  'theme-gray': options.theme === 'gray' }\">\n\n  <div #fromInput class=\"input-section\" (click)=\"toggleCalendar($event, 'from')\">\n    <span class=\"label-txt\">{{options.labels[0]}}</span>\n    <span class=\"value-txt\">{{ dateFrom | ngxFormat: options.dateFormat }}</span>\n    <span class=\"cal-icon\">\n      <svg width=\"94px\" height=\"94px\" viewBox=\"3 3 94 94\" version=\"1.1\">\n        <g id=\"Group\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(3.000000, 3.000000)\">\n          <path d=\"M67.166,20.168 C69.238,20.168 70.916,18.489 70.916,16.418 L70.916,4.085 C70.916,2.014 69.238,0.335 67.166,0.335 C65.096,0.335 63.416,2.014 63.416,4.085 L63.416,16.418 C63.416,18.489 65.096,20.168 67.166,20.168 Z M26.834,20.168 C28.904,20.168 30.584,18.489 30.584,16.418 L30.584,4.085 C30.584,2.014 28.904,0.335 26.834,0.335 C24.762,0.335 23.084,2.014 23.084,4.085 L23.084,16.418 C23.084,18.489 24.762,20.168 26.834,20.168 Z M88.833,9.5 L75.416,9.5 L75.416,16.418 C75.416,20.967 71.715,24.668 67.166,24.668 C62.617,24.668 58.916,20.967 58.916,16.418 L58.916,9.5 L35.084,9.5 L35.084,16.418 C35.084,20.967 31.383,24.668 26.834,24.668 C22.285,24.668 18.584,20.967 18.584,16.418 L18.584,9.5 L5.167,9.5 C2.405,9.5 0.167,11.738 0.167,14.5 L0.167,35 L93.833,35 L93.833,14.5 C93.833,11.738 91.595,9.5 88.833,9.5 Z M0.167,88.167 C0.167,90.929 2.405,93.167 5.167,93.167 L88.833,93.167 C91.595,93.167 93.833,90.929 93.833,88.167 L93.833,39 L0.167,39 L0.167,88.167 Z M69.387,50.875 L82.179,50.875 L82.179,63.667 L69.387,63.667 L69.387,50.875 Z M69.387,69.125 L82.179,69.125 L82.179,81.917 L69.387,81.917 L69.387,69.125 Z M50.198,50.875 L62.99,50.875 L62.99,63.667 L50.198,63.667 L50.198,50.875 Z M50.198,69.125 L62.99,69.125 L62.99,81.917 L50.198,81.917 L50.198,69.125 Z M31.01,50.875 L43.802,50.875 L43.802,63.667 L31.01,63.667 L31.01,50.875 Z M31.01,69.125 L43.802,69.125 L43.802,81.917 L31.01,81.917 L31.01,69.125 Z M11.821,50.875 L24.613,50.875 L24.613,63.667 L11.821,63.667 L11.821,50.875 Z M11.821,69.125 L24.613,69.125 L24.613,81.917 L11.821,81.917 L11.821,69.125 Z\"\n            id=\"Shape\" fill=\"#000000\" fill-rule=\"nonzero\"></path>\n        </g>\n      </svg>\n    </span>\n  </div>\n\n  <div class=\"input-section\" (click)=\"toggleCalendar($event, 'to')\">\n    <span class=\"label-txt\">{{options.labels[1]}}</span>\n    <span class=\"value-txt\">{{ dateTo | ngxFormat: options.dateFormat }}</span>\n    <span class=\"cal-icon\">\n      <svg width=\"94px\" height=\"94px\" viewBox=\"3 3 94 94\" version=\"1.1\">\n        <g id=\"Group\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(3.000000, 3.000000)\">\n          <path d=\"M67.166,20.168 C69.238,20.168 70.916,18.489 70.916,16.418 L70.916,4.085 C70.916,2.014 69.238,0.335 67.166,0.335 C65.096,0.335 63.416,2.014 63.416,4.085 L63.416,16.418 C63.416,18.489 65.096,20.168 67.166,20.168 Z M26.834,20.168 C28.904,20.168 30.584,18.489 30.584,16.418 L30.584,4.085 C30.584,2.014 28.904,0.335 26.834,0.335 C24.762,0.335 23.084,2.014 23.084,4.085 L23.084,16.418 C23.084,18.489 24.762,20.168 26.834,20.168 Z M88.833,9.5 L75.416,9.5 L75.416,16.418 C75.416,20.967 71.715,24.668 67.166,24.668 C62.617,24.668 58.916,20.967 58.916,16.418 L58.916,9.5 L35.084,9.5 L35.084,16.418 C35.084,20.967 31.383,24.668 26.834,24.668 C22.285,24.668 18.584,20.967 18.584,16.418 L18.584,9.5 L5.167,9.5 C2.405,9.5 0.167,11.738 0.167,14.5 L0.167,35 L93.833,35 L93.833,14.5 C93.833,11.738 91.595,9.5 88.833,9.5 Z M0.167,88.167 C0.167,90.929 2.405,93.167 5.167,93.167 L88.833,93.167 C91.595,93.167 93.833,90.929 93.833,88.167 L93.833,39 L0.167,39 L0.167,88.167 Z M69.387,50.875 L82.179,50.875 L82.179,63.667 L69.387,63.667 L69.387,50.875 Z M69.387,69.125 L82.179,69.125 L82.179,81.917 L69.387,81.917 L69.387,69.125 Z M50.198,50.875 L62.99,50.875 L62.99,63.667 L50.198,63.667 L50.198,50.875 Z M50.198,69.125 L62.99,69.125 L62.99,81.917 L50.198,81.917 L50.198,69.125 Z M31.01,50.875 L43.802,50.875 L43.802,63.667 L31.01,63.667 L31.01,50.875 Z M31.01,69.125 L43.802,69.125 L43.802,81.917 L31.01,81.917 L31.01,69.125 Z M11.821,50.875 L24.613,50.875 L24.613,63.667 L11.821,63.667 L11.821,50.875 Z M11.821,69.125 L24.613,69.125 L24.613,81.917 L11.821,81.917 L11.821,69.125 Z\"\n            id=\"Shape\" fill=\"#000000\" fill-rule=\"nonzero\"></path>\n        </g>\n      </svg>\n    </span>\n  </div>\n\n  <div class=\"calendar\" [ngClass]=\"{ 'is-opened': !!opened, 'is-to': opened === 'to' }\">\n    <div class=\"arrow\" [ngStyle]=\"{left: (arrowLeft || 60) + 'px'}\"></div>\n    <div class=\"calendar-container\">\n      <div class=\"controls\">\n        <span class=\"control-icon\" (click)=\"prevMonth()\">\n          <svg width=\"13px\" height=\"20px\" viewBox=\"0 44 13 20\" version=\"1.1\">\n            <path d=\"M11.7062895,64 C11.6273879,64 11.5477012,63.9744846 11.480576,63.921491 L0.139160349,54.9910879 C0.0551556781,54.9247477 0.00451734852,54.8250413 0.000199351429,54.7174839 C-0.00333355528,54.6107116 0.0402389608,54.5074722 0.119140544,54.4356364 L11.4605562,44.095211 C11.6093308,43.9589979 11.8401474,43.9707742 11.9751829,44.1187637 C12.1110036,44.2675384 12.1004048,44.4983549 11.9516302,44.6333905 L0.928176181,54.6841175 L11.9323955,63.3491601 C12.0905912,63.4735969 12.1176768,63.7028433 11.9928475,63.861039 C11.9206191,63.9521095 11.8138469,64 11.7062895,64 Z\"\n              id=\"Shape\" stroke=\"none\" fill=\"#000000\" fill-rule=\"nonzero\"></path>\n          </svg>\n        </span>\n        <span class=\"control-title capitalize\">\n          {{ date | ngxFormat:'MMMM YYYY':options.locale }}\n        </span>\n        <span class=\"control-icon\" (click)=\"nextMonth()\">\n          <svg width=\"13px\" height=\"20px\" viewBox=\"21 44 13 20\">\n            <path d=\"M32.7062895,64 C32.6273879,64 32.5477012,63.9744846 32.480576,63.921491 L21.1391603,54.9910879 C21.0551557,54.9247477 21.0045173,54.8250413 21.0001994,54.7174839 C20.9966664,54.6107116 21.040239,54.5074722 21.1191405,54.4356364 L32.4605562,44.095211 C32.6093308,43.9589979 32.8401474,43.9707742 32.9751829,44.1187637 C33.1110036,44.2675384 33.1004048,44.4983549 32.9516302,44.6333905 L21.9281762,54.6841175 L32.9323955,63.3491601 C33.0905912,63.4735969 33.1176768,63.7028433 32.9928475,63.861039 C32.9206191,63.9521095 32.8138469,64 32.7062895,64 Z\"\n              id=\"Shape\" stroke=\"none\" fill=\"#000000\" fill-rule=\"nonzero\" transform=\"translate(27.035642, 54.000000) scale(-1, 1) translate(-27.035642, -54.000000) \"></path>\n          </svg>\n        </span>\n      </div>\n      <div class=\"day-names\">\n        <span class=\"day-name\" *ngFor=\"let name of dayNames\">{{ name }}</span>\n      </div>\n      <div class=\"days\">\n        <div class=\"day\" *ngFor=\"let d of days; let i = index;\" [ngClass]=\"{\n               'is-within-range': d.isWithinRange,\n               'is-from': d.from,\n               'is-to': d.to }\"\n          (click)=\"selectDate($event, i)\">\n          <span *ngIf=\"d.visible\" class=\"day-num\" [class.is-active]=\"d.from || d.to\">{{ d.day }}</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"side-container\" *ngIf=\"options.menu && options.menu.length > 0\">\n      <div class=\"side-container-buttons\">\n        <button type=\"button\" class=\"side-button\" *ngFor=\"let range of options.menu\" (click)=\"selectRange(range)\"\n          [class.is-active]=\"range.active\">{{range.text}}\n        </button>\n      </div>\n      <span class=\"close-icon\" (click)=\"closeCalendar($event)\">\n        <svg width=\"20px\" height=\"20px\" viewBox=\"47 44 20 20\" version=\"1.1\">\n          <g id=\"Group\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(48.000000, 44.000000)\">\n            <path d=\"M19.6876399,20 C19.6047542,19.999927 19.52529,19.9669423 19.4667175,19.9082976 L0.0839056416,0.525743396 C-0.0308734765,0.402566324 -0.0274867013,0.210616527 0.0915663128,0.0915650956 C0.210619327,-0.0274863359 0.402571676,-0.030873066 0.525750385,0.0839045261 L19.9085623,19.4664587 C19.9978567,19.5558631 20.0245499,19.6902301 19.9762091,19.8069762 C19.9278683,19.9237223 19.8139998,19.9998889 19.6876399,20 Z\"\n              id=\"Shape\" fill=\"#000000\" fill-rule=\"nonzero\"></path>\n            <path d=\"M0.312360116,20 C0.186000167,19.9998889 0.0721317315,19.9237223 0.0237909073,19.8069762 C-0.0245499168,19.6902301 0.0021432967,19.5558631 0.0914377445,19.4664587 L19.4742496,0.0839045261 C19.5974283,-0.030873066 19.7893807,-0.0274863359 19.9084337,0.0915650956 C20.0274867,0.210616527 20.0308735,0.402566324 19.9160944,0.525743396 L0.533282488,19.9082976 C0.474709982,19.9669423 0.395245751,19.999927 0.312360116,20 L0.312360116,20 Z\"\n              id=\"Shape\" fill=\"#000000\" fill-rule=\"nonzero\"></path>\n          </g>\n        </svg>\n      </span>\n    </div>\n  </div>\n</div>\n",
                    providers: [DATERANGEPICKER_VALUE_ACCESSOR],
                    styles: [".capitalize{text-transform:capitalize}.ngx-daterangepicker{width:100%;height:50px;background:#fff;display:inline-block;border:1px solid #9da3a6;border-radius:7px;position:relative}.ngx-daterangepicker.is-active{border:1px solid #0070ba}.ngx-daterangepicker .input-section{width:calc(100% / 2);height:50px;display:block;float:left;outline:0;padding:7px 10px;color:#2c2e2f;cursor:pointer;position:relative}.ngx-daterangepicker .input-section:first-child{border-right:1px solid #d4dade}.ngx-daterangepicker .input-section .label-txt,.ngx-daterangepicker .input-section .value-txt{display:block}.ngx-daterangepicker .input-section .label-txt{color:#0070ba;font-size:11px}.ngx-daterangepicker .input-section .value-txt{color:#2c2e2f;font-size:13px;border-bottom:1px solid transparent}.ngx-daterangepicker .input-section .cal-icon{position:absolute;display:block;right:10px;bottom:5px}.ngx-daterangepicker .input-section .cal-icon svg{width:20px;height:20px}.ngx-daterangepicker .input-section .cal-icon svg path{fill:#0d79b1}.ngx-daterangepicker .calendar{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:auto;border:1px solid #0070ba;border-radius:7px;background:#fff;position:absolute;top:75px;left:0;z-index:100000;display:none}.ngx-daterangepicker .calendar.is-opened{display:flex}.ngx-daterangepicker .calendar.is-to .arrow{left:215px}.ngx-daterangepicker .calendar .arrow{position:absolute;display:block;min-width:30px;min-height:30px;top:-15px;left:65px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-top:1px solid #0070ba;border-left:1px solid #0070ba;background:#fff;transition:left .5s}.ngx-daterangepicker .calendar .calendar-container{display:inline-block;width:340px;height:100%;padding:20px;border-right:1px solid #d4dade;float:left}.ngx-daterangepicker .calendar .calendar-container .controls{width:100%;height:20px;display:flex;justify-content:space-between;align-items:center}.ngx-daterangepicker .calendar .calendar-container .controls .control-icon{display:block;width:12px;height:20px;cursor:pointer}.ngx-daterangepicker .calendar .calendar-container .controls .control-title{font-size:17px;color:#2c2e2f}.ngx-daterangepicker .calendar .calendar-container .day-names{display:inline-block;width:300px;margin-top:30px;margin-bottom:20px}.ngx-daterangepicker .calendar .calendar-container .day-names .day-name{width:calc(300px / 7);font-size:13px;color:#9ca3a6;display:block;float:left;text-align:center;font-weight:700}.ngx-daterangepicker .calendar .calendar-container .days{display:inline-block;width:300px}.ngx-daterangepicker .calendar .calendar-container .days .day{width:calc(300px / 7);font-size:13px;color:#9ca3a6;display:block;float:left;text-align:center;margin-bottom:15px;cursor:pointer;font-weight:700}.ngx-daterangepicker .calendar .calendar-container .days .day.is-from,.ngx-daterangepicker .calendar .calendar-container .days .day.is-within-range{background:#acd5ed;color:#333}.ngx-daterangepicker .calendar .calendar-container .days .day.is-first-weekday,.ngx-daterangepicker .calendar .calendar-container .days .day.is-from{border-top-left-radius:50%;border-bottom-left-radius:50%}.ngx-daterangepicker .calendar .calendar-container .days .day.is-last-weekday,.ngx-daterangepicker .calendar .calendar-container .days .day.is-to{border-top-right-radius:50%;border-bottom-right-radius:50%}.ngx-daterangepicker .calendar .calendar-container .days .day .day-num{display:flex;justify-content:center;align-items:center;float:left;width:42px;height:42px;max-width:42px;max-height:42px;border-radius:50%;padding:10px 15px}.ngx-daterangepicker .calendar .calendar-container .days .day .day-num.is-active,.ngx-daterangepicker .calendar .calendar-container .days .day .day-num:hover{background:#0070ba;color:#fff}.ngx-daterangepicker .calendar .side-container{width:158px;min-height:390px;padding:10px;display:flex;align-items:center;position:relative;overflow:hidden;height:100%}.ngx-daterangepicker .calendar .side-container .side-container-buttons{margin-top:64px;width:200px;overflow-y:auto;overflow-x:hidden;height:390px;position:absolute;padding-bottom:10px}.ngx-daterangepicker .calendar .side-container .side-container-buttons .side-button{background:#fff;border-radius:15px;border:1px solid #0070ba;height:35px;width:138px;display:block;text-align:center;outline:0;margin-bottom:15px;color:#6b737c;font-size:13px;cursor:pointer}.ngx-daterangepicker .calendar .side-container .side-container-buttons .side-button.is-active,.ngx-daterangepicker .calendar .side-container .side-container-buttons .side-button:hover{background:#0070ba;color:#fff}.ngx-daterangepicker .calendar .side-container .close-icon{position:absolute;width:20px;height:20px;top:20px;right:15px;cursor:pointer}.ngx-daterangepicker.theme-green.is-active{border-color:#0b7285}.ngx-daterangepicker.theme-green .input-section .label-txt{color:#0b7285}.ngx-daterangepicker.theme-green .input-section .cal-icon svg path{fill:#0b7285}.ngx-daterangepicker.theme-green .calendar{border-color:#0b7285}.ngx-daterangepicker.theme-green .calendar .arrow{border-top-color:#0b7285;border-left-color:#0b7285}.ngx-daterangepicker.theme-green .calendar .calendar-container .days .day.is-from,.ngx-daterangepicker.theme-green .calendar .calendar-container .days .day.is-within-range{background:#13c3e3}.ngx-daterangepicker.theme-green .calendar .calendar-container .days .day .day-num.is-active,.ngx-daterangepicker.theme-green .calendar .calendar-container .days .day .day-num:hover{background:#0b7285}.ngx-daterangepicker.theme-green .calendar .side-container .side-container-buttons .side-button{border-color:#0b7285}.ngx-daterangepicker.theme-green .calendar .side-container .side-container-buttons .side-button.is-active,.ngx-daterangepicker.theme-green .calendar .side-container .side-container-buttons .side-button:hover{background:#0b7285}.ngx-daterangepicker.theme-teal.is-active{border-color:#087f5b}.ngx-daterangepicker.theme-teal .input-section .label-txt{color:#087f5b}.ngx-daterangepicker.theme-teal .input-section .cal-icon svg path{fill:#087f5b}.ngx-daterangepicker.theme-teal .calendar{border-color:#087f5b}.ngx-daterangepicker.theme-teal .calendar .arrow{border-top-color:#087f5b;border-left-color:#087f5b}.ngx-daterangepicker.theme-teal .calendar .calendar-container .days .day.is-from,.ngx-daterangepicker.theme-teal .calendar .calendar-container .days .day.is-within-range{background:#0edfa0}.ngx-daterangepicker.theme-teal .calendar .calendar-container .days .day .day-num.is-active,.ngx-daterangepicker.theme-teal .calendar .calendar-container .days .day .day-num:hover{background:#087f5b}.ngx-daterangepicker.theme-teal .calendar .side-container .side-container-buttons .side-button{border-color:#087f5b}.ngx-daterangepicker.theme-teal .calendar .side-container .side-container-buttons .side-button.is-active,.ngx-daterangepicker.theme-teal .calendar .side-container .side-container-buttons .side-button:hover{background:#087f5b}.ngx-daterangepicker.theme-cyan.is-active{border-color:#0b7285}.ngx-daterangepicker.theme-cyan .input-section .label-txt{color:#0b7285}.ngx-daterangepicker.theme-cyan .input-section .cal-icon svg path{fill:#0b7285}.ngx-daterangepicker.theme-cyan .calendar{border-color:#0b7285}.ngx-daterangepicker.theme-cyan .calendar .arrow{border-top-color:#0b7285;border-left-color:#0b7285}.ngx-daterangepicker.theme-cyan .calendar .calendar-container .days .day.is-from,.ngx-daterangepicker.theme-cyan .calendar .calendar-container .days .day.is-within-range{background:#13c3e3}.ngx-daterangepicker.theme-cyan .calendar .calendar-container .days .day .day-num.is-active,.ngx-daterangepicker.theme-cyan .calendar .calendar-container .days .day .day-num:hover{background:#0b7285}.ngx-daterangepicker.theme-cyan .calendar .side-container .side-container-buttons .side-button{border-color:#0b7285}.ngx-daterangepicker.theme-cyan .calendar .side-container .side-container-buttons .side-button.is-active,.ngx-daterangepicker.theme-cyan .calendar .side-container .side-container-buttons .side-button:hover{background:#0b7285}.ngx-daterangepicker.theme-grape.is-active{border-color:#862e9c}.ngx-daterangepicker.theme-grape .input-section .label-txt{color:#862e9c}.ngx-daterangepicker.theme-grape .input-section .cal-icon svg path{fill:#862e9c}.ngx-daterangepicker.theme-grape .calendar{border-color:#862e9c}.ngx-daterangepicker.theme-grape .calendar .arrow{border-top-color:#862e9c;border-left-color:#862e9c}.ngx-daterangepicker.theme-grape .calendar .calendar-container .days .day.is-from,.ngx-daterangepicker.theme-grape .calendar .calendar-container .days .day.is-within-range{background:#ba60d0}.ngx-daterangepicker.theme-grape .calendar .calendar-container .days .day .day-num.is-active,.ngx-daterangepicker.theme-grape .calendar .calendar-container .days .day .day-num:hover{background:#862e9c}.ngx-daterangepicker.theme-grape .calendar .side-container .side-container-buttons .side-button{border-color:#862e9c}.ngx-daterangepicker.theme-grape .calendar .side-container .side-container-buttons .side-button.is-active,.ngx-daterangepicker.theme-grape .calendar .side-container .side-container-buttons .side-button:hover{background:#862e9c}.ngx-daterangepicker.theme-red.is-active{border-color:#c92a2a}.ngx-daterangepicker.theme-red .input-section .label-txt{color:#c92a2a}.ngx-daterangepicker.theme-red .input-section .cal-icon svg path{fill:#c92a2a}.ngx-daterangepicker.theme-red .calendar{border-color:#c92a2a}.ngx-daterangepicker.theme-red .calendar .arrow{border-top-color:#c92a2a;border-left-color:#c92a2a}.ngx-daterangepicker.theme-red .calendar .calendar-container .days .day.is-from,.ngx-daterangepicker.theme-red .calendar .calendar-container .days .day.is-within-range{background:#e27777}.ngx-daterangepicker.theme-red .calendar .calendar-container .days .day .day-num.is-active,.ngx-daterangepicker.theme-red .calendar .calendar-container .days .day .day-num:hover{background:#c92a2a}.ngx-daterangepicker.theme-red .calendar .side-container .side-container-buttons .side-button{border-color:#c92a2a}.ngx-daterangepicker.theme-red .calendar .side-container .side-container-buttons .side-button.is-active,.ngx-daterangepicker.theme-red .calendar .side-container .side-container-buttons .side-button:hover{background:#c92a2a}.ngx-daterangepicker.theme-gray.is-active{border-color:#212529}.ngx-daterangepicker.theme-gray .input-section .label-txt{color:#212529}.ngx-daterangepicker.theme-gray .input-section .cal-icon svg path{fill:#212529}.ngx-daterangepicker.theme-gray .calendar{border-color:#212529}.ngx-daterangepicker.theme-gray .calendar .arrow{border-top-color:#212529;border-left-color:#212529}.ngx-daterangepicker.theme-gray .calendar .calendar-container .days .day.is-from,.ngx-daterangepicker.theme-gray .calendar .calendar-container .days .day.is-within-range{background:#4e5862}.ngx-daterangepicker.theme-gray .calendar .calendar-container .days .day .day-num.is-active,.ngx-daterangepicker.theme-gray .calendar .calendar-container .days .day .day-num:hover{background:#212529}.ngx-daterangepicker.theme-gray .calendar .side-container .side-container-buttons .side-button{border-color:#212529}.ngx-daterangepicker.theme-gray .calendar .side-container .side-container-buttons .side-button.is-active,.ngx-daterangepicker.theme-gray .calendar .side-container .side-container-buttons .side-button:hover{background:#212529}"]
                }] }
    ];
    /** @nocollapse */
    NgxDateRangePickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    NgxDateRangePickerComponent.propDecorators = {
        fromInput: [{ type: ViewChild, args: ['fromInput', { static: true },] }],
        options: [{ type: Input }],
        handleBlurClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return NgxDateRangePickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        return format(value, args[0] || 'DD-MM-YYYY', options);
    };
    NgxFormatPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'ngxFormat'
                },] }
    ];
    return NgxFormatPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDateRangePickerModule = /** @class */ (function () {
    function NgxDateRangePickerModule() {
    }
    NgxDateRangePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    declarations: [NgxDateRangePickerComponent, NgxFormatPipe],
                    exports: [NgxDateRangePickerComponent, NgxFormatPipe, FormsModule]
                },] }
    ];
    return NgxDateRangePickerModule;
}());

export { DATERANGEPICKER_VALUE_ACCESSOR, NgxDateRangePickerComponent, NgxDateRangePickerModule, NgxFormatPipe };
//# sourceMappingURL=ngx-daterangepicker.js.map
