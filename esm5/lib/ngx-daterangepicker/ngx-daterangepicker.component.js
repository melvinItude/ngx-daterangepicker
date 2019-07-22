/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, ElementRef, forwardRef, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as dateFns from 'date-fns';
import { locales } from './constants';
/**
 * @record
 */
export function NgxDateRangePickerDates() { }
if (false) {
    /** @type {?} */
    NgxDateRangePickerDates.prototype.from;
    /** @type {?} */
    NgxDateRangePickerDates.prototype.to;
}
/**
 * @record
 */
export function NgxMenuItem() { }
if (false) {
    /** @type {?} */
    NgxMenuItem.prototype.alias;
    /** @type {?} */
    NgxMenuItem.prototype.text;
    /** @type {?} */
    NgxMenuItem.prototype.operation;
    /** @type {?|undefined} */
    NgxMenuItem.prototype.active;
}
/**
 * @record
 */
export function NgxDateRangePickerOptions() { }
if (false) {
    /** @type {?} */
    NgxDateRangePickerOptions.prototype.theme;
    /** @type {?|undefined} */
    NgxDateRangePickerOptions.prototype.range;
    /** @type {?|undefined} */
    NgxDateRangePickerOptions.prototype.locale;
    /** @type {?} */
    NgxDateRangePickerOptions.prototype.labels;
    /** @type {?} */
    NgxDateRangePickerOptions.prototype.menu;
    /** @type {?} */
    NgxDateRangePickerOptions.prototype.dateFormat;
    /** @type {?} */
    NgxDateRangePickerOptions.prototype.outputFormat;
    /** @type {?} */
    NgxDateRangePickerOptions.prototype.startOfWeek;
    /** @type {?|undefined} */
    NgxDateRangePickerOptions.prototype.outputType;
    /** @type {?|undefined} */
    NgxDateRangePickerOptions.prototype.minDate;
    /** @type {?|undefined} */
    NgxDateRangePickerOptions.prototype.maxDate;
    /** @type {?|undefined} */
    NgxDateRangePickerOptions.prototype.date;
}
/**
 * @record
 */
export function IDay() { }
if (false) {
    /** @type {?} */
    IDay.prototype.date;
    /** @type {?} */
    IDay.prototype.day;
    /** @type {?} */
    IDay.prototype.weekday;
    /** @type {?} */
    IDay.prototype.today;
    /** @type {?} */
    IDay.prototype.firstMonthDay;
    /** @type {?} */
    IDay.prototype.lastMonthDay;
    /** @type {?} */
    IDay.prototype.visible;
    /** @type {?} */
    IDay.prototype.from;
    /** @type {?} */
    IDay.prototype.to;
    /** @type {?} */
    IDay.prototype.isWithinRange;
}
/** @type {?} */
export var DATERANGEPICKER_VALUE_ACCESSOR = {
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
            to: dateFns.addDays(this.date, 1)
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
        var dayOfWeek = dateFns.format(dateFns.setDay(date, day, { weekStartsOn: 1 }), 'dd', { locale: locales[this.options.locale] });
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
        var start = dateFns.startOfMonth(this.date);
        /** @type {?} */
        var end = dateFns.endOfMonth(this.date);
        /** @type {?} */
        var days = dateFns.eachDay(start, end).map((/**
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
                day: dateFns.getDate(d),
                weekday: dateFns.getDay(d),
                startOfWeek: startOfWeek,
                endOfWeek: endOfWeek,
                today: dateFns.isToday(d),
                firstMonthDay: dateFns.isFirstDayOfMonth(d),
                lastMonthDay: dateFns.isLastDayOfMonth(d),
                visible: true,
                from: dateFns.isSameDay(_this.dateFrom, d),
                to: dateFns.isSameDay(_this.dateTo, d),
                isWithinRange: dateFns.isWithinRange(d, _this.dateFrom, _this.dateTo)
            };
        }));
        /** @type {?} */
        var prevMonthDayNum = dateFns.getDay(start) - 1;
        /** @type {?} */
        var prevMonthDays = [];
        if (prevMonthDayNum > 0) {
            prevMonthDays = Array.from(Array(prevMonthDayNum).keys()).map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                /** @type {?} */
                var d = dateFns.subDays(start, prevMonthDayNum - i);
                return {
                    date: d,
                    day: dateFns.getDate(d),
                    weekday: dateFns.getDay(d),
                    firstMonthDay: dateFns.isFirstDayOfMonth(d),
                    lastMonthDay: dateFns.isLastDayOfMonth(d),
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
                from: dateFns.format(this.dateFrom, this.options.outputFormat),
                to: dateFns.format(this.dateTo, this.options.outputFormat)
            };
        }
        else {
            this.value =
                dateFns.format(this.dateFrom, this.options.outputFormat) + "-" + dateFns.format(this.dateTo, this.options.outputFormat);
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
            !dateFns.isAfter(dateFns.startOfDay(selectedDate), this.getDate(this.options.minDate))) ||
            (this.getDate(this.options.maxDate) &&
                !dateFns.isBefore(dateFns.startOfDay(selectedDate), this.getDate(this.options.maxDate)))) {
            return;
        }
        if ((this.opened === 'to' && dateFns.isBefore(selectedDate, this.dateFrom))) {
            this.opened = 'from';
        }
        if ((this.opened === 'from' && dateFns.isAfter(selectedDate, this.dateTo))) {
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
        this.date = dateFns.subMonths(this.date, 1);
        this.generateCalendar();
    };
    /**
     * @return {?}
     */
    NgxDateRangePickerComponent.prototype.nextMonth = /**
     * @return {?}
     */
    function () {
        this.date = dateFns.addMonths(this.date, 1);
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
        if (dateFns.isAfter(this.dateFrom, this.dateTo)) {
            this.dateTo = this.dateFrom;
        }
        this.date = dateFns.startOfDay(this.dateFrom);
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
        var today = dateFns.startOfDay(new Date());
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
                    fromDate = dateFns.addMonths(fromDate, amount * operand);
                    toDate = dateFns.addMonths(fromDate, (amount - 1));
                }
                this.dateFrom = dateFns.startOfMonth(fromDate);
                this.dateTo = dateFns.endOfMonth(toDate);
                break;
            case 'w':
                if (amount) {
                    fromDate = dateFns.addWeeks(fromDate, amount * operand);
                    toDate = dateFns.addWeeks(fromDate, (amount - 1));
                }
                this.dateFrom = dateFns.startOfWeek(fromDate, { weekStartsOn: this.options.startOfWeek });
                this.dateTo = dateFns.endOfWeek(toDate, { weekStartsOn: this.options.startOfWeek });
                break;
            case 'y':
                if (amount) {
                    fromDate = dateFns.addYears(fromDate, amount * operand);
                    toDate = dateFns.addYears(fromDate, (amount - 1));
                }
                this.dateFrom = dateFns.startOfYear(fromDate);
                this.dateTo = dateFns.endOfYear(toDate);
                break;
            case 'd':
                if (amount) {
                    fromDate = dateFns.addDays(fromDate, amount * operand);
                    toDate = dateFns.addDays(fromDate, (amount - 1));
                }
                this.dateFrom = dateFns.startOfDay(fromDate);
                this.dateTo = dateFns.startOfDay(toDate);
                break;
            // From today
            case 'mt':
                if (operand < 0) {
                    fromDate = dateFns.subMonths(today, amount);
                }
                else {
                    toDate = dateFns.addMonths(today, amount);
                }
                this.dateFrom = fromDate;
                this.dateTo = toDate;
                break;
            case 'wt':
                if (operand < 0) {
                    fromDate = dateFns.subWeeks(today, amount);
                }
                else {
                    toDate = dateFns.addWeeks(today, amount);
                }
                this.dateFrom = fromDate;
                this.dateTo = toDate;
                break;
            case 'yt':
                if (operand < 0) {
                    fromDate = dateFns.subYears(today, amount);
                }
                else {
                    toDate = dateFns.addYears(today, amount);
                }
                this.dateFrom = fromDate;
                this.dateTo = toDate;
                break;
            default:
                if (operand < 0) {
                    fromDate = dateFns.subDays(today, amount);
                }
                else {
                    toDate = dateFns.addDays(today, amount);
                }
                this.dateFrom = fromDate;
                this.dateTo = toDate;
                break;
        }
        this.date = dateFns.startOfDay(this.dateFrom);
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
            return dateFns.startOfDay(date);
        }
        if (date instanceof Object && date.year && date.month && date.day) {
            return dateFns.startOfDay(new Date(date.year, date.month - 1, date.day));
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
export { NgxDateRangePickerComponent };
if (false) {
    /** @type {?} */
    NgxDateRangePickerComponent.prototype.fromInput;
    /** @type {?} */
    NgxDateRangePickerComponent.prototype.options;
    /** @type {?} */
    NgxDateRangePickerComponent.prototype.modelValue;
    /** @type {?} */
    NgxDateRangePickerComponent.prototype.opened;
    /** @type {?} */
    NgxDateRangePickerComponent.prototype.date;
    /** @type {?} */
    NgxDateRangePickerComponent.prototype.dateFrom;
    /** @type {?} */
    NgxDateRangePickerComponent.prototype.dateTo;
    /** @type {?} */
    NgxDateRangePickerComponent.prototype.dayNames;
    /** @type {?} */
    NgxDateRangePickerComponent.prototype.days;
    /** @type {?} */
    NgxDateRangePickerComponent.prototype.range;
    /** @type {?} */
    NgxDateRangePickerComponent.prototype.defaultOptions;
    /** @type {?} */
    NgxDateRangePickerComponent.prototype.arrowLeft;
    /**
     * @type {?}
     * @private
     */
    NgxDateRangePickerComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    NgxDateRangePickerComponent.prototype.onChangeCallback;
    /**
     * @type {?}
     * @private
     */
    NgxDateRangePickerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NgxDateRangePickerComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGF0ZXJhbmdlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL25neC1kYXRlcmFuZ2VwaWNrZXIvbmd4LWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQVUsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUM5RCxTQUFTLEVBQWlCLGlCQUFpQixFQUM5QyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsaUJBQWlCLEVBQXVCLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkUsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGFBQWEsQ0FBQzs7OztBQUVwQyw2Q0FXQzs7O0lBVkcsdUNBSUU7O0lBQ0YscUNBSUU7Ozs7O0FBR04saUNBS0M7OztJQUpHLDRCQUFjOztJQUNkLDJCQUFhOztJQUNiLGdDQUFrQjs7SUFDbEIsNkJBQWlCOzs7OztBQUdyQiwrQ0FxQkM7OztJQXBCRywwQ0FBd0U7O0lBQ3hFLDBDQUFlOztJQUNmLDJDQUFnQjs7SUFDaEIsMkNBQWlCOztJQUNqQix5Q0FBb0I7O0lBQ3BCLCtDQUFtQjs7SUFDbkIsaURBQXFCOztJQUNyQixnREFBb0I7O0lBQ3BCLCtDQUFpQzs7SUFDakMsNENBSUU7O0lBQ0YsNENBSUU7O0lBQ0YseUNBQStCOzs7OztBQUduQywwQkFXQzs7O0lBVkcsb0JBQVc7O0lBQ1gsbUJBQVk7O0lBQ1osdUJBQWdCOztJQUNoQixxQkFBZTs7SUFDZiw2QkFBdUI7O0lBQ3ZCLDRCQUFzQjs7SUFDdEIsdUJBQWlCOztJQUNqQixvQkFBYzs7SUFDZCxrQkFBWTs7SUFDWiw2QkFBdUI7OztBQUczQixNQUFNLEtBQUssOEJBQThCLEdBQVE7SUFDN0MsT0FBTyxFQUFF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QUFtQjs7SUFDbkIsMkNBQWE7O0lBQ2IsNENBQWM7O0lBQ2QscURBVUU7O0lBRUYsZ0RBQWtCOzs7OztJQUVsQix3REFDRTs7Ozs7SUFFRix1REFDRTs7Ozs7SUFFVSxpREFBOEI7Ozs7O0lBQUUsMENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2UsXG4gICAgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7bG9jYWxlc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5neERhdGVSYW5nZVBpY2tlckRhdGVzIHtcbiAgICBmcm9tOiBEYXRlIHwge1xuICAgICAgICB5ZWFyOiBudW1iZXIsXG4gICAgICAgIG1vbnRoOiBudW1iZXIsXG4gICAgICAgIGRheTogbnVtYmVyXG4gICAgfTtcbiAgICB0bzogRGF0ZSB8IHtcbiAgICAgICAgeWVhcjogbnVtYmVyLFxuICAgICAgICBtb250aDogbnVtYmVyLFxuICAgICAgICBkYXk6IG51bWJlcixcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neE1lbnVJdGVtIHtcbiAgICBhbGlhczogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBvcGVyYXRpb246IHN0cmluZztcbiAgICBhY3RpdmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neERhdGVSYW5nZVBpY2tlck9wdGlvbnMge1xuICAgIHRoZW1lOiAnZGVmYXVsdCcgfCAnZ3JlZW4nIHwgJ3RlYWwnIHwgJ2N5YW4nIHwgJ2dyYXBlJyB8ICdyZWQnIHwgJ2dyYXknO1xuICAgIHJhbmdlPzogc3RyaW5nO1xuICAgIGxvY2FsZT86IHN0cmluZztcbiAgICBsYWJlbHM6IHN0cmluZ1tdO1xuICAgIG1lbnU6IE5neE1lbnVJdGVtW107XG4gICAgZGF0ZUZvcm1hdDogc3RyaW5nO1xuICAgIG91dHB1dEZvcm1hdDogc3RyaW5nO1xuICAgIHN0YXJ0T2ZXZWVrOiBudW1iZXI7XG4gICAgb3V0cHV0VHlwZT86ICdzdHJpbmcnIHwgJ29iamVjdCc7XG4gICAgbWluRGF0ZT86IERhdGUgfCB7XG4gICAgICAgIHllYXI6IG51bWJlcixcbiAgICAgICAgbW9udGg6IG51bWJlcixcbiAgICAgICAgZGF5OiBudW1iZXIsXG4gICAgfTtcbiAgICBtYXhEYXRlPzogRGF0ZSB8IHtcbiAgICAgICAgeWVhcjogbnVtYmVyLFxuICAgICAgICBtb250aDogbnVtYmVyLFxuICAgICAgICBkYXk6IG51bWJlcixcbiAgICB9O1xuICAgIGRhdGU/OiBOZ3hEYXRlUmFuZ2VQaWNrZXJEYXRlcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF5IHtcbiAgICBkYXRlOiBEYXRlO1xuICAgIGRheTogbnVtYmVyO1xuICAgIHdlZWtkYXk6IG51bWJlcjtcbiAgICB0b2RheTogYm9vbGVhbjtcbiAgICBmaXJzdE1vbnRoRGF5OiBib29sZWFuO1xuICAgIGxhc3RNb250aERheTogYm9vbGVhbjtcbiAgICB2aXNpYmxlOiBib29sZWFuO1xuICAgIGZyb206IGJvb2xlYW47XG4gICAgdG86IGJvb2xlYW47XG4gICAgaXNXaXRoaW5SYW5nZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGxldCBEQVRFUkFOR0VQSUNLRVJfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ3hEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1kYXRlcmFuZ2VwaWNrZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnbmd4LWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ25neC1kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50LnNhc3MnXSxcbiAgICBwcm92aWRlcnM6IFtEQVRFUkFOR0VQSUNLRVJfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIE5neERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gICAgQFZpZXdDaGlsZCgnZnJvbUlucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgZnJvbUlucHV0OiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgICBASW5wdXQoKSBvcHRpb25zOiBOZ3hEYXRlUmFuZ2VQaWNrZXJPcHRpb25zO1xuXG4gICAgbW9kZWxWYWx1ZTogc3RyaW5nIHwgT2JqZWN0O1xuICAgIG9wZW5lZDogZmFsc2UgfCAnZnJvbScgfCAndG8nO1xuICAgIGRhdGU6IERhdGU7XG4gICAgZGF0ZUZyb206IERhdGU7XG4gICAgZGF0ZVRvOiBEYXRlO1xuICAgIGRheU5hbWVzOiBzdHJpbmdbXTtcbiAgICBkYXlzOiBJRGF5W107XG4gICAgcmFuZ2U6IHN0cmluZztcbiAgICBkZWZhdWx0T3B0aW9uczogTmd4RGF0ZVJhbmdlUGlja2VyT3B0aW9ucyA9IHtcbiAgICAgICAgdGhlbWU6ICdkZWZhdWx0JyxcbiAgICAgICAgbGFiZWxzOiBbJ1N0YXJ0JywgJ0VuZCddLFxuICAgICAgICBsb2NhbGU6ICdlbicsXG4gICAgICAgIG1lbnU6IFtdLFxuICAgICAgICBkYXRlRm9ybWF0OiAnREQtTU0tWVlZWScsXG4gICAgICAgIG91dHB1dEZvcm1hdDogJ0RELU1NLVlZWVknLFxuICAgICAgICBvdXRwdXRUeXBlOiAnc3RyaW5nJyxcbiAgICAgICAgc3RhcnRPZldlZWs6IDEsXG4gICAgICAgIGRhdGU6IG51bGxcbiAgICB9O1xuXG4gICAgYXJyb3dMZWZ0OiBudW1iZXI7XG5cbiAgICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4ge1xuICAgIH07XG5cbiAgICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCk6IHN0cmluZyB8IE9iamVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsVmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcgfCBPYmplY3QpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodmFsdWUpO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcnJvd0xlZnQgPSB0aGlzLmZyb21JbnB1dC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucy5kYXRlID0ge1xuICAgICAgICAgICAgZnJvbTogdGhpcy5kYXRlLFxuICAgICAgICAgICAgdG86IGRhdGVGbnMuYWRkRGF5cyh0aGlzLmRhdGUsIDEpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHRoaXMuZGVmYXVsdE9wdGlvbnM7XG4gICAgICAgIHRoaXMuaW5pdE5hbWVzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RSYW5nZSh0aGlzLm9wdGlvbnMubWVudS5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJhbmdlID09PSBpdGVtLmFsaWFzO1xuICAgICAgICAgICAgfSlbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kYXRlID0gdGhpcy5kZWZhdWx0T3B0aW9ucy5kYXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdERhdGVzKHRoaXMub3B0aW9ucy5kYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwgdGhpcy5kZWZhdWx0T3B0aW9ucztcblxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3REYXRlcyh0aGlzLm9wdGlvbnMuZGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXROYW1lcygpO1xuICAgIH1cblxuICAgIGluaXROYW1lcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXlOYW1lcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDc7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5kYXlOYW1lcy5wdXNoKHRoaXMuZ2V0RGF5T2ZXZWVrKGkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF5TmFtZXMucHVzaCh0aGlzLmdldERheU9mV2VlaygwKSk7XG4gICAgfVxuXG4gICAgZ2V0RGF5T2ZXZWVrKGRheTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGVGbnMuZm9ybWF0KGRhdGVGbnMuc2V0RGF5KGRhdGUsIGRheSwge3dlZWtTdGFydHNPbjogMX0pLCAnZGQnLCB7bG9jYWxlOiBsb2NhbGVzW3RoaXMub3B0aW9ucy5sb2NhbGVdfSk7XG4gICAgICAgIHJldHVybiBkYXlPZldlZWtbMF0udG9VcHBlckNhc2UoKSArIGRheU9mV2Vlay5zdWJzdHJpbmcoMSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDYWxlbmRhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXlzID0gW107XG4gICAgICAgIGNvbnN0IHN0YXJ0OiBEYXRlID0gZGF0ZUZucy5zdGFydE9mTW9udGgodGhpcy5kYXRlKTtcbiAgICAgICAgY29uc3QgZW5kOiBEYXRlID0gZGF0ZUZucy5lbmRPZk1vbnRoKHRoaXMuZGF0ZSk7XG5cbiAgICAgICAgY29uc3QgZGF5czogSURheVtdID0gZGF0ZUZucy5lYWNoRGF5KHN0YXJ0LCBlbmQpLm1hcChkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0T2ZXZWVrID0gdGhpcy5vcHRpb25zLnN0YXJ0T2ZXZWVrO1xuICAgICAgICAgICAgY29uc3QgZW5kT2ZXZWVrID0gc3RhcnRPZldlZWsgPT09IDAgPyA2IDogMDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0ZTogZCxcbiAgICAgICAgICAgICAgICBkYXk6IGRhdGVGbnMuZ2V0RGF0ZShkKSxcbiAgICAgICAgICAgICAgICB3ZWVrZGF5OiBkYXRlRm5zLmdldERheShkKSxcbiAgICAgICAgICAgICAgICBzdGFydE9mV2VlayxcbiAgICAgICAgICAgICAgICBlbmRPZldlZWssXG4gICAgICAgICAgICAgICAgdG9kYXk6IGRhdGVGbnMuaXNUb2RheShkKSxcbiAgICAgICAgICAgICAgICBmaXJzdE1vbnRoRGF5OiBkYXRlRm5zLmlzRmlyc3REYXlPZk1vbnRoKGQpLFxuICAgICAgICAgICAgICAgIGxhc3RNb250aERheTogZGF0ZUZucy5pc0xhc3REYXlPZk1vbnRoKGQpLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZnJvbTogZGF0ZUZucy5pc1NhbWVEYXkodGhpcy5kYXRlRnJvbSwgZCksXG4gICAgICAgICAgICAgICAgdG86IGRhdGVGbnMuaXNTYW1lRGF5KHRoaXMuZGF0ZVRvLCBkKSxcbiAgICAgICAgICAgICAgICBpc1dpdGhpblJhbmdlOiBkYXRlRm5zLmlzV2l0aGluUmFuZ2UoZCwgdGhpcy5kYXRlRnJvbSwgdGhpcy5kYXRlVG8pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwcmV2TW9udGhEYXlOdW0gPSBkYXRlRm5zLmdldERheShzdGFydCkgLSAxO1xuICAgICAgICBsZXQgcHJldk1vbnRoRGF5czogSURheVtdID0gW107XG4gICAgICAgIGlmIChwcmV2TW9udGhEYXlOdW0gPiAwKSB7XG4gICAgICAgICAgICBwcmV2TW9udGhEYXlzID0gQXJyYXkuZnJvbShBcnJheShwcmV2TW9udGhEYXlOdW0pLmtleXMoKSkubWFwKGkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBkYXRlRm5zLnN1YkRheXMoc3RhcnQsIHByZXZNb250aERheU51bSAtIGkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IGQsXG4gICAgICAgICAgICAgICAgICAgIGRheTogZGF0ZUZucy5nZXREYXRlKGQpLFxuICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5OiBkYXRlRm5zLmdldERheShkKSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RNb250aERheTogZGF0ZUZucy5pc0ZpcnN0RGF5T2ZNb250aChkKSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1vbnRoRGF5OiBkYXRlRm5zLmlzTGFzdERheU9mTW9udGgoZCksXG4gICAgICAgICAgICAgICAgICAgIHRvZGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGZyb206IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB0bzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGlzV2l0aGluUmFuZ2U6IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXlzID0gcHJldk1vbnRoRGF5cy5jb25jYXQoZGF5cyk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMub3V0cHV0VHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgZnJvbTogZGF0ZUZucy5mb3JtYXQodGhpcy5kYXRlRnJvbSwgdGhpcy5vcHRpb25zLm91dHB1dEZvcm1hdCksXG4gICAgICAgICAgICAgICAgdG86IGRhdGVGbnMuZm9ybWF0KHRoaXMuZGF0ZVRvLCB0aGlzLm9wdGlvbnMub3V0cHV0Rm9ybWF0KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPVxuICAgICAgICAgICAgICAgIGAke2RhdGVGbnMuZm9ybWF0KHRoaXMuZGF0ZUZyb20sIHRoaXMub3B0aW9ucy5vdXRwdXRGb3JtYXQpfS0ke2RhdGVGbnMuZm9ybWF0KHRoaXMuZGF0ZVRvLCB0aGlzLm9wdGlvbnMub3V0cHV0Rm9ybWF0KX1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQ2FsZW5kYXIoZTogTW91c2VFdmVudCwgc2VsZWN0aW9uOiAnZnJvbScgfCAndG8nKTogdm9pZCB7XG4gICAgICAgIC8vIEFycm93IHBvc2l0aW9uXG4gICAgICAgIGlmIChzZWxlY3Rpb24gPT09ICdmcm9tJykge1xuICAgICAgICAgICAgdGhpcy5hcnJvd0xlZnQgPSB0aGlzLmZyb21JbnB1dC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICogMC40O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcnJvd0xlZnQgPSB0aGlzLmZyb21JbnB1dC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICsgdGhpcy5mcm9tSW5wdXQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAqIDAuNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wZW5lZCAmJiB0aGlzLm9wZW5lZCAhPT0gc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5lZCA9IHNlbGVjdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3BlbmVkID0gdGhpcy5vcGVuZWQgPyBmYWxzZSA6IHNlbGVjdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlQ2FsZW5kYXIoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNlbGVjdERhdGUoZTogTW91c2VFdmVudCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRGF0ZTogRGF0ZSA9IHRoaXMuZGF5c1tpbmRleF0uZGF0ZTtcblxuICAgICAgICBpZiAoKHRoaXMuZ2V0RGF0ZSh0aGlzLm9wdGlvbnMubWluRGF0ZSkgJiZcbiAgICAgICAgICAgICFkYXRlRm5zLmlzQWZ0ZXIoZGF0ZUZucy5zdGFydE9mRGF5KHNlbGVjdGVkRGF0ZSksIHRoaXMuZ2V0RGF0ZSh0aGlzLm9wdGlvbnMubWluRGF0ZSkpKSB8fFxuICAgICAgICAgICAgKHRoaXMuZ2V0RGF0ZSh0aGlzLm9wdGlvbnMubWF4RGF0ZSkgJiZcbiAgICAgICAgICAgICAgICAhZGF0ZUZucy5pc0JlZm9yZShkYXRlRm5zLnN0YXJ0T2ZEYXkoc2VsZWN0ZWREYXRlKSwgdGhpcy5nZXREYXRlKHRoaXMub3B0aW9ucy5tYXhEYXRlKSkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHRoaXMub3BlbmVkID09PSAndG8nICYmIGRhdGVGbnMuaXNCZWZvcmUoc2VsZWN0ZWREYXRlLCB0aGlzLmRhdGVGcm9tKSkpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbmVkID0gJ2Zyb20nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCh0aGlzLm9wZW5lZCA9PT0gJ2Zyb20nICYmIGRhdGVGbnMuaXNBZnRlcihzZWxlY3RlZERhdGUsIHRoaXMuZGF0ZVRvKSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZUZyb20gPSBzZWxlY3RlZERhdGU7XG4gICAgICAgICAgICB0aGlzLmRhdGVUbyA9IHNlbGVjdGVkRGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wZW5lZCA9PT0gJ2Zyb20nKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVGcm9tID0gc2VsZWN0ZWREYXRlO1xuICAgICAgICAgICAgdGhpcy5vcGVuZWQgPSAndG8nO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3BlbmVkID09PSAndG8nKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVUbyA9IHNlbGVjdGVkRGF0ZTtcbiAgICAgICAgICAgIHRoaXMub3BlbmVkID0gJ2Zyb20nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3BlbmVkID09PSAnZnJvbScpIHtcbiAgICAgICAgICAgIHRoaXMuYXJyb3dMZWZ0ID0gdGhpcy5mcm9tSW5wdXQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAqIDAuNDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXJyb3dMZWZ0ID0gdGhpcy5mcm9tSW5wdXQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCArIHRoaXMuZnJvbUlucHV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKiAwLjQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1lbnUgJiYgdGhpcy5vcHRpb25zLm1lbnUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1lbnUubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XG4gICAgfVxuXG4gICAgcHJldk1vbnRoKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlRm5zLnN1Yk1vbnRocyh0aGlzLmRhdGUsIDEpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcbiAgICB9XG5cbiAgICBuZXh0TW9udGgoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVGbnMuYWRkTW9udGhzKHRoaXMuZGF0ZSwgMSk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xuICAgIH1cblxuICAgIHNlbGVjdERhdGVzKGRhdGVzOiBOZ3hEYXRlUmFuZ2VQaWNrZXJEYXRlcyk6IHZvaWQge1xuICAgICAgICB0aGlzLmRhdGVGcm9tID0gdGhpcy5nZXREYXRlKGRhdGVzLmZyb20pO1xuXG4gICAgICAgIHRoaXMuZGF0ZVRvID0gdGhpcy5nZXREYXRlKGRhdGVzLnRvKTtcblxuICAgICAgICBpZiAoZGF0ZUZucy5pc0FmdGVyKHRoaXMuZGF0ZUZyb20sIHRoaXMuZGF0ZVRvKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRlVG8gPSB0aGlzLmRhdGVGcm9tO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZUZucy5zdGFydE9mRGF5KHRoaXMuZGF0ZUZyb20pO1xuXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xuICAgIH1cblxuICAgIHNlbGVjdFJhbmdlKHJhbmdlOiBOZ3hNZW51SXRlbSk6IHZvaWQge1xuICAgICAgICBjb25zdCB0b2RheSA9IGRhdGVGbnMuc3RhcnRPZkRheShuZXcgRGF0ZSgpKTtcbiAgICAgICAgbGV0IGZyb21EYXRlID0gdG9kYXk7XG4gICAgICAgIGxldCB0b0RhdGUgPSB0b2RheTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMubWVudS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gaXRlbS5hbGlhcyA9PT0gcmFuZ2UuYWxpYXM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG9wZXJhbmQgPSByYW5nZS5vcGVyYXRpb24uY2hhckF0KDApID09PSAnLScgPyAtMSA6IDE7XG4gICAgICAgIGNvbnN0IGFtb3VudCA9IE1hdGguYWJzKHBhcnNlSW50KHJhbmdlLm9wZXJhdGlvbiwgMTApKTtcbiAgICAgICAgY29uc3Qgb3BlID0gcmFuZ2Uub3BlcmF0aW9uLm1hdGNoKC9bZCx3LG0seV10Py8pO1xuICAgICAgICBjb25zdCB1bml0ID0gb3BlLmxlbmd0aCA+IDAgPyBvcGVbMF0gOiAnJztcblxuICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgICAgICAgIGlmIChhbW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbURhdGUgPSBkYXRlRm5zLmFkZE1vbnRocyhmcm9tRGF0ZSwgYW1vdW50ICogb3BlcmFuZCk7XG4gICAgICAgICAgICAgICAgICAgIHRvRGF0ZSA9IGRhdGVGbnMuYWRkTW9udGhzKGZyb21EYXRlLCAoYW1vdW50IC0gMSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUZyb20gPSBkYXRlRm5zLnN0YXJ0T2ZNb250aChmcm9tRGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVG8gPSBkYXRlRm5zLmVuZE9mTW9udGgodG9EYXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgICAgIGlmIChhbW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbURhdGUgPSBkYXRlRm5zLmFkZFdlZWtzKGZyb21EYXRlLCBhbW91bnQgKiBvcGVyYW5kKTtcbiAgICAgICAgICAgICAgICAgICAgdG9EYXRlID0gZGF0ZUZucy5hZGRXZWVrcyhmcm9tRGF0ZSwgKGFtb3VudCAtIDEpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVGcm9tID0gZGF0ZUZucy5zdGFydE9mV2Vlayhmcm9tRGF0ZSwge3dlZWtTdGFydHNPbjogdGhpcy5vcHRpb25zLnN0YXJ0T2ZXZWVrfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVG8gPSBkYXRlRm5zLmVuZE9mV2Vlayh0b0RhdGUsIHt3ZWVrU3RhcnRzT246IHRoaXMub3B0aW9ucy5zdGFydE9mV2Vla30pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneSc6XG4gICAgICAgICAgICAgICAgaWYgKGFtb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tRGF0ZSA9IGRhdGVGbnMuYWRkWWVhcnMoZnJvbURhdGUsIGFtb3VudCAqIG9wZXJhbmQpO1xuICAgICAgICAgICAgICAgICAgICB0b0RhdGUgPSBkYXRlRm5zLmFkZFllYXJzKGZyb21EYXRlLCAoYW1vdW50IC0gMSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUZyb20gPSBkYXRlRm5zLnN0YXJ0T2ZZZWFyKGZyb21EYXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUbyA9IGRhdGVGbnMuZW5kT2ZZZWFyKHRvRGF0ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICBpZiAoYW1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21EYXRlID0gZGF0ZUZucy5hZGREYXlzKGZyb21EYXRlLCBhbW91bnQgKiBvcGVyYW5kKTtcbiAgICAgICAgICAgICAgICAgICAgdG9EYXRlID0gZGF0ZUZucy5hZGREYXlzKGZyb21EYXRlLCAoYW1vdW50IC0gMSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUZyb20gPSBkYXRlRm5zLnN0YXJ0T2ZEYXkoZnJvbURhdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRvID0gZGF0ZUZucy5zdGFydE9mRGF5KHRvRGF0ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBGcm9tIHRvZGF5XG4gICAgICAgICAgICBjYXNlICdtdCc6XG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhbmQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21EYXRlID0gZGF0ZUZucy5zdWJNb250aHModG9kYXksIGFtb3VudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9EYXRlID0gZGF0ZUZucy5hZGRNb250aHModG9kYXksIGFtb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlRnJvbSA9IGZyb21EYXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRvID0gdG9EYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnd3QnOlxuICAgICAgICAgICAgICAgIGlmIChvcGVyYW5kIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tRGF0ZSA9IGRhdGVGbnMuc3ViV2Vla3ModG9kYXksIGFtb3VudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9EYXRlID0gZGF0ZUZucy5hZGRXZWVrcyh0b2RheSwgYW1vdW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVGcm9tID0gZnJvbURhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVG8gPSB0b0RhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd5dCc6XG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhbmQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21EYXRlID0gZGF0ZUZucy5zdWJZZWFycyh0b2RheSwgYW1vdW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b0RhdGUgPSBkYXRlRm5zLmFkZFllYXJzKHRvZGF5LCBhbW91bnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUZyb20gPSBmcm9tRGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUbyA9IHRvRGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhbmQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21EYXRlID0gZGF0ZUZucy5zdWJEYXlzKHRvZGF5LCBhbW91bnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvRGF0ZSA9IGRhdGVGbnMuYWRkRGF5cyh0b2RheSwgYW1vdW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlRnJvbSA9IGZyb21EYXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRvID0gdG9EYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZUZucy5zdGFydE9mRGF5KHRoaXMuZGF0ZUZyb20pO1xuXG4gICAgICAgIHRoaXMucmFuZ2UgPSByYW5nZS5hbGlhcztcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICAgIGhhbmRsZUJsdXJDbGljayhlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUuc3JjRWxlbWVudCB8fCBlLnRhcmdldDtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnRhcmdldCkgJiYgISg8RWxlbWVudD50YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucygnZGF5LW51bScpKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIG9wZW4gY2FsZW5kYXJcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlbihvcGVuZWQ6ICdmcm9tJyB8ICd0bycgPSAnZnJvbScpIHtcbiAgICAgICAgdGhpcy50b2dnbGVDYWxlbmRhcihudWxsLCBvcGVuZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byBjbG9zZSBjYWxlbmRhclxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gdG9nZ2xlIGNhbGVuZGFyXG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKCEhdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RGF0ZShkYXRlOiBEYXRlIHwgeyB5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRheTogbnVtYmVyIH0pOiBEYXRlIHtcbiAgICAgICAgaWYgKCFkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGVGbnMuc3RhcnRPZkRheShkYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgT2JqZWN0ICYmIGRhdGUueWVhciAmJiBkYXRlLm1vbnRoICYmIGRhdGUuZGF5KSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZUZucy5zdGFydE9mRGF5KG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXX0=