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
export let DATERANGEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NgxDateRangePickerComponent)),
    multi: true
};
export class NgxDateRangePickerComponent {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     */
    constructor(elementRef, cdr) {
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
        () => {
        });
        this.onChangeCallback = (/**
         * @return {?}
         */
        () => {
        });
    }
    /**
     * @return {?}
     */
    get value() {
        return this.modelValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (!value) {
            return;
        }
        this.modelValue = value;
        this.onChangeCallback(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (!value) {
            return;
        }
        this.modelValue = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.arrowLeft = this.fromInput.nativeElement.offsetWidth;
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
            (item) => {
                return this.options.range === item.alias;
            }))[0]);
        }
        else {
            if (!this.options.date) {
                this.options.date = this.defaultOptions.date;
            }
            this.selectDates(this.options.date);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.options = this.options || this.defaultOptions;
        if (this.options.date) {
            this.selectDates(this.options.date);
        }
        this.initNames();
    }
    /**
     * @return {?}
     */
    initNames() {
        this.dayNames = [];
        for (let i = 1; i < 7; ++i) {
            this.dayNames.push(this.getDayOfWeek(i));
        }
        this.dayNames.push(this.getDayOfWeek(0));
    }
    /**
     * @param {?} day
     * @return {?}
     */
    getDayOfWeek(day) {
        /** @type {?} */
        const date = new Date();
        /** @type {?} */
        const dayOfWeek = dateFns.format(dateFns.setDay(date, day, { weekStartsOn: 1 }), 'dd', { locale: locales[this.options.locale] });
        return dayOfWeek[0].toUpperCase() + dayOfWeek.substring(1);
    }
    /**
     * @return {?}
     */
    generateCalendar() {
        this.days = [];
        /** @type {?} */
        const start = dateFns.startOfMonth(this.date);
        /** @type {?} */
        const end = dateFns.endOfMonth(this.date);
        /** @type {?} */
        const days = dateFns.eachDay(start, end).map((/**
         * @param {?} d
         * @return {?}
         */
        d => {
            /** @type {?} */
            const startOfWeek = this.options.startOfWeek;
            /** @type {?} */
            const endOfWeek = startOfWeek === 0 ? 6 : 0;
            return {
                date: d,
                day: dateFns.getDate(d),
                weekday: dateFns.getDay(d),
                startOfWeek,
                endOfWeek,
                today: dateFns.isToday(d),
                firstMonthDay: dateFns.isFirstDayOfMonth(d),
                lastMonthDay: dateFns.isLastDayOfMonth(d),
                visible: true,
                from: dateFns.isSameDay(this.dateFrom, d),
                to: dateFns.isSameDay(this.dateTo, d),
                isWithinRange: dateFns.isWithinRange(d, this.dateFrom, this.dateTo)
            };
        }));
        /** @type {?} */
        const prevMonthDayNum = dateFns.getDay(start) - 1;
        /** @type {?} */
        let prevMonthDays = [];
        if (prevMonthDayNum > 0) {
            prevMonthDays = Array.from(Array(prevMonthDayNum).keys()).map((/**
             * @param {?} i
             * @return {?}
             */
            i => {
                /** @type {?} */
                const d = dateFns.subDays(start, prevMonthDayNum - i);
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
                `${dateFns.format(this.dateFrom, this.options.outputFormat)}-${dateFns.format(this.dateTo, this.options.outputFormat)}`;
        }
    }
    /**
     * @param {?} e
     * @param {?} selection
     * @return {?}
     */
    toggleCalendar(e, selection) {
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
    }
    /**
     * @param {?} e
     * @return {?}
     */
    closeCalendar(e) {
        this.opened = false;
    }
    /**
     * @param {?} e
     * @param {?} index
     * @return {?}
     */
    selectDate(e, index) {
        e.preventDefault();
        /** @type {?} */
        const selectedDate = this.days[index].date;
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
            (item) => {
                item.active = false;
            }));
        }
        this.generateCalendar();
    }
    /**
     * @return {?}
     */
    prevMonth() {
        this.date = dateFns.subMonths(this.date, 1);
        this.generateCalendar();
    }
    /**
     * @return {?}
     */
    nextMonth() {
        this.date = dateFns.addMonths(this.date, 1);
        this.generateCalendar();
    }
    /**
     * @param {?} dates
     * @return {?}
     */
    selectDates(dates) {
        this.dateFrom = this.getDate(dates.from);
        this.dateTo = this.getDate(dates.to);
        if (dateFns.isAfter(this.dateFrom, this.dateTo)) {
            this.dateTo = this.dateFrom;
        }
        this.date = dateFns.startOfDay(this.dateFrom);
        this.generateCalendar();
    }
    /**
     * @param {?} range
     * @return {?}
     */
    selectRange(range) {
        /** @type {?} */
        const today = dateFns.startOfDay(new Date());
        /** @type {?} */
        let fromDate = today;
        /** @type {?} */
        let toDate = today;
        this.options.menu.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            item.active = item.alias === range.alias;
        }));
        /** @type {?} */
        const operand = range.operation.charAt(0) === '-' ? -1 : 1;
        /** @type {?} */
        const amount = Math.abs(parseInt(range.operation, 10));
        /** @type {?} */
        const ope = range.operation.match(/[d,w,m,y]t?/);
        /** @type {?} */
        const unit = ope.length > 0 ? ope[0] : '';
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
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleBlurClick(e) {
        /** @type {?} */
        const target = e.srcElement || e.target;
        if (!this.elementRef.nativeElement.contains(e.target) && !((/** @type {?} */ (target))).classList.contains('day-num')) {
            this.opened = false;
        }
    }
    /**
     * Method to open calendar
     * @param {?=} opened
     * @return {?}
     */
    open(opened = 'from') {
        this.toggleCalendar(null, opened);
    }
    /**
     * Method to close calendar
     * @return {?}
     */
    close() {
        this.opened = false;
    }
    /**
     * Method to toggle calendar
     * @return {?}
     */
    toggle() {
        if (!!this.opened) {
            this.close();
            return;
        }
        this.open();
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    getDate(date) {
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
    }
}
NgxDateRangePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-daterangepicker',
                template: "<div class=\"ngx-daterangepicker\" [ngClass]=\"{ 'is-active': !!opened,\n                  'theme-green': options.theme === 'green',\n                  'theme-teal': options.theme === 'teal',\n                  'theme-cyan': options.theme === 'cyan',\n                  'theme-grape': options.theme === 'grape',\n                  'theme-red': options.theme === 'red',\n                  'theme-gray': options.theme === 'gray' }\">\n\n  <div #fromInput class=\"input-section\" (click)=\"toggleCalendar($event, 'from')\">\n    <span class=\"label-txt\">{{options.labels[0]}}</span>\n    <span class=\"value-txt\">{{ dateFrom | ngxFormat: options.dateFormat }}</span>\n    <span class=\"cal-icon\">\n      <svg width=\"94px\" height=\"94px\" viewBox=\"3 3 94 94\" version=\"1.1\">\n        <g id=\"Group\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(3.000000, 3.000000)\">\n          <path d=\"M67.166,20.168 C69.238,20.168 70.916,18.489 70.916,16.418 L70.916,4.085 C70.916,2.014 69.238,0.335 67.166,0.335 C65.096,0.335 63.416,2.014 63.416,4.085 L63.416,16.418 C63.416,18.489 65.096,20.168 67.166,20.168 Z M26.834,20.168 C28.904,20.168 30.584,18.489 30.584,16.418 L30.584,4.085 C30.584,2.014 28.904,0.335 26.834,0.335 C24.762,0.335 23.084,2.014 23.084,4.085 L23.084,16.418 C23.084,18.489 24.762,20.168 26.834,20.168 Z M88.833,9.5 L75.416,9.5 L75.416,16.418 C75.416,20.967 71.715,24.668 67.166,24.668 C62.617,24.668 58.916,20.967 58.916,16.418 L58.916,9.5 L35.084,9.5 L35.084,16.418 C35.084,20.967 31.383,24.668 26.834,24.668 C22.285,24.668 18.584,20.967 18.584,16.418 L18.584,9.5 L5.167,9.5 C2.405,9.5 0.167,11.738 0.167,14.5 L0.167,35 L93.833,35 L93.833,14.5 C93.833,11.738 91.595,9.5 88.833,9.5 Z M0.167,88.167 C0.167,90.929 2.405,93.167 5.167,93.167 L88.833,93.167 C91.595,93.167 93.833,90.929 93.833,88.167 L93.833,39 L0.167,39 L0.167,88.167 Z M69.387,50.875 L82.179,50.875 L82.179,63.667 L69.387,63.667 L69.387,50.875 Z M69.387,69.125 L82.179,69.125 L82.179,81.917 L69.387,81.917 L69.387,69.125 Z M50.198,50.875 L62.99,50.875 L62.99,63.667 L50.198,63.667 L50.198,50.875 Z M50.198,69.125 L62.99,69.125 L62.99,81.917 L50.198,81.917 L50.198,69.125 Z M31.01,50.875 L43.802,50.875 L43.802,63.667 L31.01,63.667 L31.01,50.875 Z M31.01,69.125 L43.802,69.125 L43.802,81.917 L31.01,81.917 L31.01,69.125 Z M11.821,50.875 L24.613,50.875 L24.613,63.667 L11.821,63.667 L11.821,50.875 Z M11.821,69.125 L24.613,69.125 L24.613,81.917 L11.821,81.917 L11.821,69.125 Z\"\n            id=\"Shape\" fill=\"#000000\" fill-rule=\"nonzero\"></path>\n        </g>\n      </svg>\n    </span>\n  </div>\n\n  <div class=\"input-section\" (click)=\"toggleCalendar($event, 'to')\">\n    <span class=\"label-txt\">{{options.labels[1]}}</span>\n    <span class=\"value-txt\">{{ dateTo | ngxFormat: options.dateFormat }}</span>\n    <span class=\"cal-icon\">\n      <svg width=\"94px\" height=\"94px\" viewBox=\"3 3 94 94\" version=\"1.1\">\n        <g id=\"Group\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(3.000000, 3.000000)\">\n          <path d=\"M67.166,20.168 C69.238,20.168 70.916,18.489 70.916,16.418 L70.916,4.085 C70.916,2.014 69.238,0.335 67.166,0.335 C65.096,0.335 63.416,2.014 63.416,4.085 L63.416,16.418 C63.416,18.489 65.096,20.168 67.166,20.168 Z M26.834,20.168 C28.904,20.168 30.584,18.489 30.584,16.418 L30.584,4.085 C30.584,2.014 28.904,0.335 26.834,0.335 C24.762,0.335 23.084,2.014 23.084,4.085 L23.084,16.418 C23.084,18.489 24.762,20.168 26.834,20.168 Z M88.833,9.5 L75.416,9.5 L75.416,16.418 C75.416,20.967 71.715,24.668 67.166,24.668 C62.617,24.668 58.916,20.967 58.916,16.418 L58.916,9.5 L35.084,9.5 L35.084,16.418 C35.084,20.967 31.383,24.668 26.834,24.668 C22.285,24.668 18.584,20.967 18.584,16.418 L18.584,9.5 L5.167,9.5 C2.405,9.5 0.167,11.738 0.167,14.5 L0.167,35 L93.833,35 L93.833,14.5 C93.833,11.738 91.595,9.5 88.833,9.5 Z M0.167,88.167 C0.167,90.929 2.405,93.167 5.167,93.167 L88.833,93.167 C91.595,93.167 93.833,90.929 93.833,88.167 L93.833,39 L0.167,39 L0.167,88.167 Z M69.387,50.875 L82.179,50.875 L82.179,63.667 L69.387,63.667 L69.387,50.875 Z M69.387,69.125 L82.179,69.125 L82.179,81.917 L69.387,81.917 L69.387,69.125 Z M50.198,50.875 L62.99,50.875 L62.99,63.667 L50.198,63.667 L50.198,50.875 Z M50.198,69.125 L62.99,69.125 L62.99,81.917 L50.198,81.917 L50.198,69.125 Z M31.01,50.875 L43.802,50.875 L43.802,63.667 L31.01,63.667 L31.01,50.875 Z M31.01,69.125 L43.802,69.125 L43.802,81.917 L31.01,81.917 L31.01,69.125 Z M11.821,50.875 L24.613,50.875 L24.613,63.667 L11.821,63.667 L11.821,50.875 Z M11.821,69.125 L24.613,69.125 L24.613,81.917 L11.821,81.917 L11.821,69.125 Z\"\n            id=\"Shape\" fill=\"#000000\" fill-rule=\"nonzero\"></path>\n        </g>\n      </svg>\n    </span>\n  </div>\n\n  <div class=\"calendar\" [ngClass]=\"{ 'is-opened': !!opened, 'is-to': opened === 'to' }\">\n    <div class=\"arrow\" [ngStyle]=\"{left: (arrowLeft || 60) + 'px'}\"></div>\n    <div class=\"calendar-container\">\n      <div class=\"controls\">\n        <span class=\"control-icon\" (click)=\"prevMonth()\">\n          <svg width=\"13px\" height=\"20px\" viewBox=\"0 44 13 20\" version=\"1.1\">\n            <path d=\"M11.7062895,64 C11.6273879,64 11.5477012,63.9744846 11.480576,63.921491 L0.139160349,54.9910879 C0.0551556781,54.9247477 0.00451734852,54.8250413 0.000199351429,54.7174839 C-0.00333355528,54.6107116 0.0402389608,54.5074722 0.119140544,54.4356364 L11.4605562,44.095211 C11.6093308,43.9589979 11.8401474,43.9707742 11.9751829,44.1187637 C12.1110036,44.2675384 12.1004048,44.4983549 11.9516302,44.6333905 L0.928176181,54.6841175 L11.9323955,63.3491601 C12.0905912,63.4735969 12.1176768,63.7028433 11.9928475,63.861039 C11.9206191,63.9521095 11.8138469,64 11.7062895,64 Z\"\n              id=\"Shape\" stroke=\"none\" fill=\"#000000\" fill-rule=\"nonzero\"></path>\n          </svg>\n        </span>\n        <span class=\"control-title capitalize\">\n          {{ date | ngxFormat:'MMMM YYYY':options.locale }}\n        </span>\n        <span class=\"control-icon\" (click)=\"nextMonth()\">\n          <svg width=\"13px\" height=\"20px\" viewBox=\"21 44 13 20\">\n            <path d=\"M32.7062895,64 C32.6273879,64 32.5477012,63.9744846 32.480576,63.921491 L21.1391603,54.9910879 C21.0551557,54.9247477 21.0045173,54.8250413 21.0001994,54.7174839 C20.9966664,54.6107116 21.040239,54.5074722 21.1191405,54.4356364 L32.4605562,44.095211 C32.6093308,43.9589979 32.8401474,43.9707742 32.9751829,44.1187637 C33.1110036,44.2675384 33.1004048,44.4983549 32.9516302,44.6333905 L21.9281762,54.6841175 L32.9323955,63.3491601 C33.0905912,63.4735969 33.1176768,63.7028433 32.9928475,63.861039 C32.9206191,63.9521095 32.8138469,64 32.7062895,64 Z\"\n              id=\"Shape\" stroke=\"none\" fill=\"#000000\" fill-rule=\"nonzero\" transform=\"translate(27.035642, 54.000000) scale(-1, 1) translate(-27.035642, -54.000000) \"></path>\n          </svg>\n        </span>\n      </div>\n      <div class=\"day-names\">\n        <span class=\"day-name\" *ngFor=\"let name of dayNames\">{{ name }}</span>\n      </div>\n      <div class=\"days\">\n        <div class=\"day\" *ngFor=\"let d of days; let i = index;\" [ngClass]=\"{\n               'is-within-range': d.isWithinRange,\n               'is-from': d.from,\n               'is-to': d.to }\"\n          (click)=\"selectDate($event, i)\">\n          <span *ngIf=\"d.visible\" class=\"day-num\" [class.is-active]=\"d.from || d.to\">{{ d.day }}</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"side-container\" *ngIf=\"options.menu && options.menu.length > 0\">\n      <div class=\"side-container-buttons\">\n        <button type=\"button\" class=\"side-button\" *ngFor=\"let range of options.menu\" (click)=\"selectRange(range)\"\n          [class.is-active]=\"range.active\">{{range.text}}\n        </button>\n      </div>\n      <span class=\"close-icon\" (click)=\"closeCalendar($event)\">\n        <svg width=\"20px\" height=\"20px\" viewBox=\"47 44 20 20\" version=\"1.1\">\n          <g id=\"Group\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(48.000000, 44.000000)\">\n            <path d=\"M19.6876399,20 C19.6047542,19.999927 19.52529,19.9669423 19.4667175,19.9082976 L0.0839056416,0.525743396 C-0.0308734765,0.402566324 -0.0274867013,0.210616527 0.0915663128,0.0915650956 C0.210619327,-0.0274863359 0.402571676,-0.030873066 0.525750385,0.0839045261 L19.9085623,19.4664587 C19.9978567,19.5558631 20.0245499,19.6902301 19.9762091,19.8069762 C19.9278683,19.9237223 19.8139998,19.9998889 19.6876399,20 Z\"\n              id=\"Shape\" fill=\"#000000\" fill-rule=\"nonzero\"></path>\n            <path d=\"M0.312360116,20 C0.186000167,19.9998889 0.0721317315,19.9237223 0.0237909073,19.8069762 C-0.0245499168,19.6902301 0.0021432967,19.5558631 0.0914377445,19.4664587 L19.4742496,0.0839045261 C19.5974283,-0.030873066 19.7893807,-0.0274863359 19.9084337,0.0915650956 C20.0274867,0.210616527 20.0308735,0.402566324 19.9160944,0.525743396 L0.533282488,19.9082976 C0.474709982,19.9669423 0.395245751,19.999927 0.312360116,20 L0.312360116,20 Z\"\n              id=\"Shape\" fill=\"#000000\" fill-rule=\"nonzero\"></path>\n          </g>\n        </svg>\n      </span>\n    </div>\n  </div>\n</div>\n",
                providers: [DATERANGEPICKER_VALUE_ACCESSOR],
                styles: [".capitalize{text-transform:capitalize}.ngx-daterangepicker{width:100%;height:50px;background:#fff;display:inline-block;border:1px solid #9da3a6;border-radius:7px;position:relative}.ngx-daterangepicker.is-active{border:1px solid #0070ba}.ngx-daterangepicker .input-section{width:calc(100% / 2);height:50px;display:block;float:left;outline:0;padding:7px 10px;color:#2c2e2f;cursor:pointer;position:relative}.ngx-daterangepicker .input-section:first-child{border-right:1px solid #d4dade}.ngx-daterangepicker .input-section .label-txt,.ngx-daterangepicker .input-section .value-txt{display:block}.ngx-daterangepicker .input-section .label-txt{color:#0070ba;font-size:11px}.ngx-daterangepicker .input-section .value-txt{color:#2c2e2f;font-size:13px;border-bottom:1px solid transparent}.ngx-daterangepicker .input-section .cal-icon{position:absolute;display:block;right:10px;bottom:5px}.ngx-daterangepicker .input-section .cal-icon svg{width:20px;height:20px}.ngx-daterangepicker .input-section .cal-icon svg path{fill:#0d79b1}.ngx-daterangepicker .calendar{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:auto;border:1px solid #0070ba;border-radius:7px;background:#fff;position:absolute;top:75px;left:0;z-index:100000;display:none}.ngx-daterangepicker .calendar.is-opened{display:flex}.ngx-daterangepicker .calendar.is-to .arrow{left:215px}.ngx-daterangepicker .calendar .arrow{position:absolute;display:block;min-width:30px;min-height:30px;top:-15px;left:65px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-top:1px solid #0070ba;border-left:1px solid #0070ba;background:#fff;transition:left .5s}.ngx-daterangepicker .calendar .calendar-container{display:inline-block;width:340px;height:100%;padding:20px;border-right:1px solid #d4dade;float:left}.ngx-daterangepicker .calendar .calendar-container .controls{width:100%;height:20px;display:flex;justify-content:space-between;align-items:center}.ngx-daterangepicker .calendar .calendar-container .controls .control-icon{display:block;width:12px;height:20px;cursor:pointer}.ngx-daterangepicker .calendar .calendar-container .controls .control-title{font-size:17px;color:#2c2e2f}.ngx-daterangepicker .calendar .calendar-container .day-names{display:inline-block;width:300px;margin-top:30px;margin-bottom:20px}.ngx-daterangepicker .calendar .calendar-container .day-names .day-name{width:calc(300px / 7);font-size:13px;color:#9ca3a6;display:block;float:left;text-align:center;font-weight:700}.ngx-daterangepicker .calendar .calendar-container .days{display:inline-block;width:300px}.ngx-daterangepicker .calendar .calendar-container .days .day{width:calc(300px / 7);font-size:13px;color:#9ca3a6;display:block;float:left;text-align:center;margin-bottom:15px;cursor:pointer;font-weight:700}.ngx-daterangepicker .calendar .calendar-container .days .day.is-from,.ngx-daterangepicker .calendar .calendar-container .days .day.is-within-range{background:#acd5ed;color:#333}.ngx-daterangepicker .calendar .calendar-container .days .day.is-first-weekday,.ngx-daterangepicker .calendar .calendar-container .days .day.is-from{border-top-left-radius:50%;border-bottom-left-radius:50%}.ngx-daterangepicker .calendar .calendar-container .days .day.is-last-weekday,.ngx-daterangepicker .calendar .calendar-container .days .day.is-to{border-top-right-radius:50%;border-bottom-right-radius:50%}.ngx-daterangepicker .calendar .calendar-container .days .day .day-num{display:flex;justify-content:center;align-items:center;float:left;width:42px;height:42px;max-width:42px;max-height:42px;border-radius:50%;padding:10px 15px}.ngx-daterangepicker .calendar .calendar-container .days .day .day-num.is-active,.ngx-daterangepicker .calendar .calendar-container .days .day .day-num:hover{background:#0070ba;color:#fff}.ngx-daterangepicker .calendar .side-container{width:158px;min-height:390px;padding:10px;display:flex;align-items:center;position:relative;overflow:hidden;height:100%}.ngx-daterangepicker .calendar .side-container .side-container-buttons{margin-top:64px;width:200px;overflow-y:auto;overflow-x:hidden;height:390px;position:absolute;padding-bottom:10px}.ngx-daterangepicker .calendar .side-container .side-container-buttons .side-button{background:#fff;border-radius:15px;border:1px solid #0070ba;height:35px;width:138px;display:block;text-align:center;outline:0;margin-bottom:15px;color:#6b737c;font-size:13px;cursor:pointer}.ngx-daterangepicker .calendar .side-container .side-container-buttons .side-button.is-active,.ngx-daterangepicker .calendar .side-container .side-container-buttons .side-button:hover{background:#0070ba;color:#fff}.ngx-daterangepicker .calendar .side-container .close-icon{position:absolute;width:20px;height:20px;top:20px;right:15px;cursor:pointer}.ngx-daterangepicker.theme-green.is-active{border-color:#0b7285}.ngx-daterangepicker.theme-green .input-section .label-txt{color:#0b7285}.ngx-daterangepicker.theme-green .input-section .cal-icon svg path{fill:#0b7285}.ngx-daterangepicker.theme-green .calendar{border-color:#0b7285}.ngx-daterangepicker.theme-green .calendar .arrow{border-top-color:#0b7285;border-left-color:#0b7285}.ngx-daterangepicker.theme-green .calendar .calendar-container .days .day.is-from,.ngx-daterangepicker.theme-green .calendar .calendar-container .days .day.is-within-range{background:#13c3e3}.ngx-daterangepicker.theme-green .calendar .calendar-container .days .day .day-num.is-active,.ngx-daterangepicker.theme-green .calendar .calendar-container .days .day .day-num:hover{background:#0b7285}.ngx-daterangepicker.theme-green .calendar .side-container .side-container-buttons .side-button{border-color:#0b7285}.ngx-daterangepicker.theme-green .calendar .side-container .side-container-buttons .side-button.is-active,.ngx-daterangepicker.theme-green .calendar .side-container .side-container-buttons .side-button:hover{background:#0b7285}.ngx-daterangepicker.theme-teal.is-active{border-color:#087f5b}.ngx-daterangepicker.theme-teal .input-section .label-txt{color:#087f5b}.ngx-daterangepicker.theme-teal .input-section .cal-icon svg path{fill:#087f5b}.ngx-daterangepicker.theme-teal .calendar{border-color:#087f5b}.ngx-daterangepicker.theme-teal .calendar .arrow{border-top-color:#087f5b;border-left-color:#087f5b}.ngx-daterangepicker.theme-teal .calendar .calendar-container .days .day.is-from,.ngx-daterangepicker.theme-teal .calendar .calendar-container .days .day.is-within-range{background:#0edfa0}.ngx-daterangepicker.theme-teal .calendar .calendar-container .days .day .day-num.is-active,.ngx-daterangepicker.theme-teal .calendar .calendar-container .days .day .day-num:hover{background:#087f5b}.ngx-daterangepicker.theme-teal .calendar .side-container .side-container-buttons .side-button{border-color:#087f5b}.ngx-daterangepicker.theme-teal .calendar .side-container .side-container-buttons .side-button.is-active,.ngx-daterangepicker.theme-teal .calendar .side-container .side-container-buttons .side-button:hover{background:#087f5b}.ngx-daterangepicker.theme-cyan.is-active{border-color:#0b7285}.ngx-daterangepicker.theme-cyan .input-section .label-txt{color:#0b7285}.ngx-daterangepicker.theme-cyan .input-section .cal-icon svg path{fill:#0b7285}.ngx-daterangepicker.theme-cyan .calendar{border-color:#0b7285}.ngx-daterangepicker.theme-cyan .calendar .arrow{border-top-color:#0b7285;border-left-color:#0b7285}.ngx-daterangepicker.theme-cyan .calendar .calendar-container .days .day.is-from,.ngx-daterangepicker.theme-cyan .calendar .calendar-container .days .day.is-within-range{background:#13c3e3}.ngx-daterangepicker.theme-cyan .calendar .calendar-container .days .day .day-num.is-active,.ngx-daterangepicker.theme-cyan .calendar .calendar-container .days .day .day-num:hover{background:#0b7285}.ngx-daterangepicker.theme-cyan .calendar .side-container .side-container-buttons .side-button{border-color:#0b7285}.ngx-daterangepicker.theme-cyan .calendar .side-container .side-container-buttons .side-button.is-active,.ngx-daterangepicker.theme-cyan .calendar .side-container .side-container-buttons .side-button:hover{background:#0b7285}.ngx-daterangepicker.theme-grape.is-active{border-color:#862e9c}.ngx-daterangepicker.theme-grape .input-section .label-txt{color:#862e9c}.ngx-daterangepicker.theme-grape .input-section .cal-icon svg path{fill:#862e9c}.ngx-daterangepicker.theme-grape .calendar{border-color:#862e9c}.ngx-daterangepicker.theme-grape .calendar .arrow{border-top-color:#862e9c;border-left-color:#862e9c}.ngx-daterangepicker.theme-grape .calendar .calendar-container .days .day.is-from,.ngx-daterangepicker.theme-grape .calendar .calendar-container .days .day.is-within-range{background:#ba60d0}.ngx-daterangepicker.theme-grape .calendar .calendar-container .days .day .day-num.is-active,.ngx-daterangepicker.theme-grape .calendar .calendar-container .days .day .day-num:hover{background:#862e9c}.ngx-daterangepicker.theme-grape .calendar .side-container .side-container-buttons .side-button{border-color:#862e9c}.ngx-daterangepicker.theme-grape .calendar .side-container .side-container-buttons .side-button.is-active,.ngx-daterangepicker.theme-grape .calendar .side-container .side-container-buttons .side-button:hover{background:#862e9c}.ngx-daterangepicker.theme-red.is-active{border-color:#c92a2a}.ngx-daterangepicker.theme-red .input-section .label-txt{color:#c92a2a}.ngx-daterangepicker.theme-red .input-section .cal-icon svg path{fill:#c92a2a}.ngx-daterangepicker.theme-red .calendar{border-color:#c92a2a}.ngx-daterangepicker.theme-red .calendar .arrow{border-top-color:#c92a2a;border-left-color:#c92a2a}.ngx-daterangepicker.theme-red .calendar .calendar-container .days .day.is-from,.ngx-daterangepicker.theme-red .calendar .calendar-container .days .day.is-within-range{background:#e27777}.ngx-daterangepicker.theme-red .calendar .calendar-container .days .day .day-num.is-active,.ngx-daterangepicker.theme-red .calendar .calendar-container .days .day .day-num:hover{background:#c92a2a}.ngx-daterangepicker.theme-red .calendar .side-container .side-container-buttons .side-button{border-color:#c92a2a}.ngx-daterangepicker.theme-red .calendar .side-container .side-container-buttons .side-button.is-active,.ngx-daterangepicker.theme-red .calendar .side-container .side-container-buttons .side-button:hover{background:#c92a2a}.ngx-daterangepicker.theme-gray.is-active{border-color:#212529}.ngx-daterangepicker.theme-gray .input-section .label-txt{color:#212529}.ngx-daterangepicker.theme-gray .input-section .cal-icon svg path{fill:#212529}.ngx-daterangepicker.theme-gray .calendar{border-color:#212529}.ngx-daterangepicker.theme-gray .calendar .arrow{border-top-color:#212529;border-left-color:#212529}.ngx-daterangepicker.theme-gray .calendar .calendar-container .days .day.is-from,.ngx-daterangepicker.theme-gray .calendar .calendar-container .days .day.is-within-range{background:#4e5862}.ngx-daterangepicker.theme-gray .calendar .calendar-container .days .day .day-num.is-active,.ngx-daterangepicker.theme-gray .calendar .calendar-container .days .day .day-num:hover{background:#212529}.ngx-daterangepicker.theme-gray .calendar .side-container .side-container-buttons .side-button{border-color:#212529}.ngx-daterangepicker.theme-gray .calendar .side-container .side-container-buttons .side-button.is-active,.ngx-daterangepicker.theme-gray .calendar .side-container .side-container-buttons .side-button:hover{background:#212529}"]
            }] }
];
/** @nocollapse */
NgxDateRangePickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
NgxDateRangePickerComponent.propDecorators = {
    fromInput: [{ type: ViewChild, args: ['fromInput', { static: true },] }],
    options: [{ type: Input }],
    handleBlurClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGF0ZXJhbmdlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL25neC1kYXRlcmFuZ2VwaWNrZXIvbmd4LWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQVUsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUM5RCxTQUFTLEVBQWlCLGlCQUFpQixFQUM5QyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsaUJBQWlCLEVBQXVCLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkUsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGFBQWEsQ0FBQzs7OztBQUVwQyw2Q0FXQzs7O0lBVkcsdUNBSUU7O0lBQ0YscUNBSUU7Ozs7O0FBR04saUNBS0M7OztJQUpHLDRCQUFjOztJQUNkLDJCQUFhOztJQUNiLGdDQUFrQjs7SUFDbEIsNkJBQWlCOzs7OztBQUdyQiwrQ0FxQkM7OztJQXBCRywwQ0FBd0U7O0lBQ3hFLDBDQUFlOztJQUNmLDJDQUFnQjs7SUFDaEIsMkNBQWlCOztJQUNqQix5Q0FBb0I7O0lBQ3BCLCtDQUFtQjs7SUFDbkIsaURBQXFCOztJQUNyQixnREFBb0I7O0lBQ3BCLCtDQUFpQzs7SUFDakMsNENBSUU7O0lBQ0YsNENBSUU7O0lBQ0YseUNBQStCOzs7OztBQUduQywwQkFXQzs7O0lBVkcsb0JBQVc7O0lBQ1gsbUJBQVk7O0lBQ1osdUJBQWdCOztJQUNoQixxQkFBZTs7SUFDZiw2QkFBdUI7O0lBQ3ZCLDRCQUFzQjs7SUFDdEIsdUJBQWlCOztJQUNqQixvQkFBYzs7SUFDZCxrQkFBWTs7SUFDWiw2QkFBdUI7OztBQUczQixNQUFNLEtBQUssOEJBQThCLEdBQVE7SUFDN0MsT0FBTyxFQUFF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LElBQUksRUFBRTtZQUN0QixPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7UUFFRCxJQUFJLElBQUksWUFBWSxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDL0QsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUU7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7WUE1WkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLCtuU0FBaUQ7Z0JBRWpELFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDOzthQUM5Qzs7OztZQTFFb0MsVUFBVTtZQUNqQixpQkFBaUI7Ozt3QkEyRTFDLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3NCQUN2QyxLQUFLOzhCQW9XTCxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFyVzFDLGdEQUFnRjs7SUFDaEYsOENBQTRDOztJQUU1QyxpREFBNEI7O0lBQzVCLDZDQUE4Qjs7SUFDOUIsMkNBQVc7O0lBQ1gsK0NBQWU7O0lBQ2YsNkNBQWE7O0lBQ2IsK0NBQW1COztJQUNuQiwyQ0FBYTs7SUFDYiw0Q0FBYzs7SUFDZCxxREFVRTs7SUFFRixnREFBa0I7Ozs7O0lBRWxCLHdEQUNFOzs7OztJQUVGLHVEQUNFOzs7OztJQUVVLGlEQUE4Qjs7Ozs7SUFBRSwwQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgT25Jbml0LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZSxcbiAgICBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHtsb2NhbGVzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4RGF0ZVJhbmdlUGlja2VyRGF0ZXMge1xuICAgIGZyb206IERhdGUgfCB7XG4gICAgICAgIHllYXI6IG51bWJlcixcbiAgICAgICAgbW9udGg6IG51bWJlcixcbiAgICAgICAgZGF5OiBudW1iZXJcbiAgICB9O1xuICAgIHRvOiBEYXRlIHwge1xuICAgICAgICB5ZWFyOiBudW1iZXIsXG4gICAgICAgIG1vbnRoOiBudW1iZXIsXG4gICAgICAgIGRheTogbnVtYmVyLFxuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4TWVudUl0ZW0ge1xuICAgIGFsaWFzOiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIG9wZXJhdGlvbjogc3RyaW5nO1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4RGF0ZVJhbmdlUGlja2VyT3B0aW9ucyB7XG4gICAgdGhlbWU6ICdkZWZhdWx0JyB8ICdncmVlbicgfCAndGVhbCcgfCAnY3lhbicgfCAnZ3JhcGUnIHwgJ3JlZCcgfCAnZ3JheSc7XG4gICAgcmFuZ2U/OiBzdHJpbmc7XG4gICAgbG9jYWxlPzogc3RyaW5nO1xuICAgIGxhYmVsczogc3RyaW5nW107XG4gICAgbWVudTogTmd4TWVudUl0ZW1bXTtcbiAgICBkYXRlRm9ybWF0OiBzdHJpbmc7XG4gICAgb3V0cHV0Rm9ybWF0OiBzdHJpbmc7XG4gICAgc3RhcnRPZldlZWs6IG51bWJlcjtcbiAgICBvdXRwdXRUeXBlPzogJ3N0cmluZycgfCAnb2JqZWN0JztcbiAgICBtaW5EYXRlPzogRGF0ZSB8IHtcbiAgICAgICAgeWVhcjogbnVtYmVyLFxuICAgICAgICBtb250aDogbnVtYmVyLFxuICAgICAgICBkYXk6IG51bWJlcixcbiAgICB9O1xuICAgIG1heERhdGU/OiBEYXRlIHwge1xuICAgICAgICB5ZWFyOiBudW1iZXIsXG4gICAgICAgIG1vbnRoOiBudW1iZXIsXG4gICAgICAgIGRheTogbnVtYmVyLFxuICAgIH07XG4gICAgZGF0ZT86IE5neERhdGVSYW5nZVBpY2tlckRhdGVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXkge1xuICAgIGRhdGU6IERhdGU7XG4gICAgZGF5OiBudW1iZXI7XG4gICAgd2Vla2RheTogbnVtYmVyO1xuICAgIHRvZGF5OiBib29sZWFuO1xuICAgIGZpcnN0TW9udGhEYXk6IGJvb2xlYW47XG4gICAgbGFzdE1vbnRoRGF5OiBib29sZWFuO1xuICAgIHZpc2libGU6IGJvb2xlYW47XG4gICAgZnJvbTogYm9vbGVhbjtcbiAgICB0bzogYm9vbGVhbjtcbiAgICBpc1dpdGhpblJhbmdlOiBib29sZWFuO1xufVxuXG5leHBvcnQgbGV0IERBVEVSQU5HRVBJQ0tFUl9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5neERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWRhdGVyYW5nZXBpY2tlcicsXG4gICAgdGVtcGxhdGVVcmw6ICduZ3gtZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbmd4LWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQuc2FzcyddLFxuICAgIHByb3ZpZGVyczogW0RBVEVSQU5HRVBJQ0tFUl9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgICBAVmlld0NoaWxkKCdmcm9tSW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBmcm9tSW5wdXQ6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICAgIEBJbnB1dCgpIG9wdGlvbnM6IE5neERhdGVSYW5nZVBpY2tlck9wdGlvbnM7XG5cbiAgICBtb2RlbFZhbHVlOiBzdHJpbmcgfCBPYmplY3Q7XG4gICAgb3BlbmVkOiBmYWxzZSB8ICdmcm9tJyB8ICd0byc7XG4gICAgZGF0ZTogRGF0ZTtcbiAgICBkYXRlRnJvbTogRGF0ZTtcbiAgICBkYXRlVG86IERhdGU7XG4gICAgZGF5TmFtZXM6IHN0cmluZ1tdO1xuICAgIGRheXM6IElEYXlbXTtcbiAgICByYW5nZTogc3RyaW5nO1xuICAgIGRlZmF1bHRPcHRpb25zOiBOZ3hEYXRlUmFuZ2VQaWNrZXJPcHRpb25zID0ge1xuICAgICAgICB0aGVtZTogJ2RlZmF1bHQnLFxuICAgICAgICBsYWJlbHM6IFsnU3RhcnQnLCAnRW5kJ10sXG4gICAgICAgIGxvY2FsZTogJ2VuJyxcbiAgICAgICAgbWVudTogW10sXG4gICAgICAgIGRhdGVGb3JtYXQ6ICdERC1NTS1ZWVlZJyxcbiAgICAgICAgb3V0cHV0Rm9ybWF0OiAnREQtTU0tWVlZWScsXG4gICAgICAgIG91dHB1dFR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBzdGFydE9mV2VlazogMSxcbiAgICAgICAgZGF0ZTogbnVsbFxuICAgIH07XG5cbiAgICBhcnJvd0xlZnQ6IG51bWJlcjtcblxuICAgIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHtcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKTogc3RyaW5nIHwgT2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxWYWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZyB8IE9iamVjdCkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh2YWx1ZSk7XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFycm93TGVmdCA9IHRoaXMuZnJvbUlucHV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zLmRhdGUgPSB7XG4gICAgICAgICAgICBmcm9tOiB0aGlzLmRhdGUsXG4gICAgICAgICAgICB0bzogZGF0ZUZucy5hZGREYXlzKHRoaXMuZGF0ZSwgMSlcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwgdGhpcy5kZWZhdWx0T3B0aW9ucztcbiAgICAgICAgdGhpcy5pbml0TmFtZXMoKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdFJhbmdlKHRoaXMub3B0aW9ucy5tZW51LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmFuZ2UgPT09IGl0ZW0uYWxpYXM7XG4gICAgICAgICAgICB9KVswXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5kYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRhdGUgPSB0aGlzLmRlZmF1bHRPcHRpb25zLmRhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RGF0ZXModGhpcy5vcHRpb25zLmRhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcE5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCB0aGlzLmRlZmF1bHRPcHRpb25zO1xuXG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdERhdGVzKHRoaXMub3B0aW9ucy5kYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdE5hbWVzKCk7XG4gICAgfVxuXG4gICAgaW5pdE5hbWVzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRheU5hbWVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNzsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLmRheU5hbWVzLnB1c2godGhpcy5nZXREYXlPZldlZWsoaSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXlOYW1lcy5wdXNoKHRoaXMuZ2V0RGF5T2ZXZWVrKDApKTtcbiAgICB9XG5cbiAgICBnZXREYXlPZldlZWsoZGF5OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZUZucy5mb3JtYXQoZGF0ZUZucy5zZXREYXkoZGF0ZSwgZGF5LCB7d2Vla1N0YXJ0c09uOiAxfSksICdkZCcsIHtsb2NhbGU6IGxvY2FsZXNbdGhpcy5vcHRpb25zLmxvY2FsZV19KTtcbiAgICAgICAgcmV0dXJuIGRheU9mV2Vla1swXS50b1VwcGVyQ2FzZSgpICsgZGF5T2ZXZWVrLnN1YnN0cmluZygxKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUNhbGVuZGFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRheXMgPSBbXTtcbiAgICAgICAgY29uc3Qgc3RhcnQ6IERhdGUgPSBkYXRlRm5zLnN0YXJ0T2ZNb250aCh0aGlzLmRhdGUpO1xuICAgICAgICBjb25zdCBlbmQ6IERhdGUgPSBkYXRlRm5zLmVuZE9mTW9udGgodGhpcy5kYXRlKTtcblxuICAgICAgICBjb25zdCBkYXlzOiBJRGF5W10gPSBkYXRlRm5zLmVhY2hEYXkoc3RhcnQsIGVuZCkubWFwKGQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRPZldlZWsgPSB0aGlzLm9wdGlvbnMuc3RhcnRPZldlZWs7XG4gICAgICAgICAgICBjb25zdCBlbmRPZldlZWsgPSBzdGFydE9mV2VlayA9PT0gMCA/IDYgOiAwO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRlOiBkLFxuICAgICAgICAgICAgICAgIGRheTogZGF0ZUZucy5nZXREYXRlKGQpLFxuICAgICAgICAgICAgICAgIHdlZWtkYXk6IGRhdGVGbnMuZ2V0RGF5KGQpLFxuICAgICAgICAgICAgICAgIHN0YXJ0T2ZXZWVrLFxuICAgICAgICAgICAgICAgIGVuZE9mV2VlayxcbiAgICAgICAgICAgICAgICB0b2RheTogZGF0ZUZucy5pc1RvZGF5KGQpLFxuICAgICAgICAgICAgICAgIGZpcnN0TW9udGhEYXk6IGRhdGVGbnMuaXNGaXJzdERheU9mTW9udGgoZCksXG4gICAgICAgICAgICAgICAgbGFzdE1vbnRoRGF5OiBkYXRlRm5zLmlzTGFzdERheU9mTW9udGgoZCksXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmcm9tOiBkYXRlRm5zLmlzU2FtZURheSh0aGlzLmRhdGVGcm9tLCBkKSxcbiAgICAgICAgICAgICAgICB0bzogZGF0ZUZucy5pc1NhbWVEYXkodGhpcy5kYXRlVG8sIGQpLFxuICAgICAgICAgICAgICAgIGlzV2l0aGluUmFuZ2U6IGRhdGVGbnMuaXNXaXRoaW5SYW5nZShkLCB0aGlzLmRhdGVGcm9tLCB0aGlzLmRhdGVUbylcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHByZXZNb250aERheU51bSA9IGRhdGVGbnMuZ2V0RGF5KHN0YXJ0KSAtIDE7XG4gICAgICAgIGxldCBwcmV2TW9udGhEYXlzOiBJRGF5W10gPSBbXTtcbiAgICAgICAgaWYgKHByZXZNb250aERheU51bSA+IDApIHtcbiAgICAgICAgICAgIHByZXZNb250aERheXMgPSBBcnJheS5mcm9tKEFycmF5KHByZXZNb250aERheU51bSkua2V5cygpKS5tYXAoaSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IGRhdGVGbnMuc3ViRGF5cyhzdGFydCwgcHJldk1vbnRoRGF5TnVtIC0gaSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogZCxcbiAgICAgICAgICAgICAgICAgICAgZGF5OiBkYXRlRm5zLmdldERhdGUoZCksXG4gICAgICAgICAgICAgICAgICAgIHdlZWtkYXk6IGRhdGVGbnMuZ2V0RGF5KGQpLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdE1vbnRoRGF5OiBkYXRlRm5zLmlzRmlyc3REYXlPZk1vbnRoKGQpLFxuICAgICAgICAgICAgICAgICAgICBsYXN0TW9udGhEYXk6IGRhdGVGbnMuaXNMYXN0RGF5T2ZNb250aChkKSxcbiAgICAgICAgICAgICAgICAgICAgdG9kYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHRvOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaXNXaXRoaW5SYW5nZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRheXMgPSBwcmV2TW9udGhEYXlzLmNvbmNhdChkYXlzKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vdXRwdXRUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHtcbiAgICAgICAgICAgICAgICBmcm9tOiBkYXRlRm5zLmZvcm1hdCh0aGlzLmRhdGVGcm9tLCB0aGlzLm9wdGlvbnMub3V0cHV0Rm9ybWF0KSxcbiAgICAgICAgICAgICAgICB0bzogZGF0ZUZucy5mb3JtYXQodGhpcy5kYXRlVG8sIHRoaXMub3B0aW9ucy5vdXRwdXRGb3JtYXQpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9XG4gICAgICAgICAgICAgICAgYCR7ZGF0ZUZucy5mb3JtYXQodGhpcy5kYXRlRnJvbSwgdGhpcy5vcHRpb25zLm91dHB1dEZvcm1hdCl9LSR7ZGF0ZUZucy5mb3JtYXQodGhpcy5kYXRlVG8sIHRoaXMub3B0aW9ucy5vdXRwdXRGb3JtYXQpfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVDYWxlbmRhcihlOiBNb3VzZUV2ZW50LCBzZWxlY3Rpb246ICdmcm9tJyB8ICd0bycpOiB2b2lkIHtcbiAgICAgICAgLy8gQXJyb3cgcG9zaXRpb25cbiAgICAgICAgaWYgKHNlbGVjdGlvbiA9PT0gJ2Zyb20nKSB7XG4gICAgICAgICAgICB0aGlzLmFycm93TGVmdCA9IHRoaXMuZnJvbUlucHV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKiAwLjQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFycm93TGVmdCA9IHRoaXMuZnJvbUlucHV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKyB0aGlzLmZyb21JbnB1dC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICogMC40O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3BlbmVkICYmIHRoaXMub3BlbmVkICE9PSBzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMub3BlbmVkID0gc2VsZWN0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcGVuZWQgPSB0aGlzLm9wZW5lZCA/IGZhbHNlIDogc2VsZWN0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VDYWxlbmRhcihlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2VsZWN0RGF0ZShlOiBNb3VzZUV2ZW50LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXRlOiBEYXRlID0gdGhpcy5kYXlzW2luZGV4XS5kYXRlO1xuXG4gICAgICAgIGlmICgodGhpcy5nZXREYXRlKHRoaXMub3B0aW9ucy5taW5EYXRlKSAmJlxuICAgICAgICAgICAgIWRhdGVGbnMuaXNBZnRlcihkYXRlRm5zLnN0YXJ0T2ZEYXkoc2VsZWN0ZWREYXRlKSwgdGhpcy5nZXREYXRlKHRoaXMub3B0aW9ucy5taW5EYXRlKSkpIHx8XG4gICAgICAgICAgICAodGhpcy5nZXREYXRlKHRoaXMub3B0aW9ucy5tYXhEYXRlKSAmJlxuICAgICAgICAgICAgICAgICFkYXRlRm5zLmlzQmVmb3JlKGRhdGVGbnMuc3RhcnRPZkRheShzZWxlY3RlZERhdGUpLCB0aGlzLmdldERhdGUodGhpcy5vcHRpb25zLm1heERhdGUpKSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgodGhpcy5vcGVuZWQgPT09ICd0bycgJiYgZGF0ZUZucy5pc0JlZm9yZShzZWxlY3RlZERhdGUsIHRoaXMuZGF0ZUZyb20pKSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuZWQgPSAnZnJvbSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHRoaXMub3BlbmVkID09PSAnZnJvbScgJiYgZGF0ZUZucy5pc0FmdGVyKHNlbGVjdGVkRGF0ZSwgdGhpcy5kYXRlVG8pKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRlRnJvbSA9IHNlbGVjdGVkRGF0ZTtcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRvID0gc2VsZWN0ZWREYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3BlbmVkID09PSAnZnJvbScpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZUZyb20gPSBzZWxlY3RlZERhdGU7XG4gICAgICAgICAgICB0aGlzLm9wZW5lZCA9ICd0byc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcGVuZWQgPT09ICd0bycpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRvID0gc2VsZWN0ZWREYXRlO1xuICAgICAgICAgICAgdGhpcy5vcGVuZWQgPSAnZnJvbSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcGVuZWQgPT09ICdmcm9tJykge1xuICAgICAgICAgICAgdGhpcy5hcnJvd0xlZnQgPSB0aGlzLmZyb21JbnB1dC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICogMC40O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcnJvd0xlZnQgPSB0aGlzLmZyb21JbnB1dC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICsgdGhpcy5mcm9tSW5wdXQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAqIDAuNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWVudSAmJiB0aGlzLm9wdGlvbnMubWVudS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubWVudS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcbiAgICB9XG5cbiAgICBwcmV2TW9udGgoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVGbnMuc3ViTW9udGhzKHRoaXMuZGF0ZSwgMSk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xuICAgIH1cblxuICAgIG5leHRNb250aCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZUZucy5hZGRNb250aHModGhpcy5kYXRlLCAxKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0RGF0ZXMoZGF0ZXM6IE5neERhdGVSYW5nZVBpY2tlckRhdGVzKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGF0ZUZyb20gPSB0aGlzLmdldERhdGUoZGF0ZXMuZnJvbSk7XG5cbiAgICAgICAgdGhpcy5kYXRlVG8gPSB0aGlzLmdldERhdGUoZGF0ZXMudG8pO1xuXG4gICAgICAgIGlmIChkYXRlRm5zLmlzQWZ0ZXIodGhpcy5kYXRlRnJvbSwgdGhpcy5kYXRlVG8pKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVUbyA9IHRoaXMuZGF0ZUZyb207XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlRm5zLnN0YXJ0T2ZEYXkodGhpcy5kYXRlRnJvbSk7XG5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0UmFuZ2UocmFuZ2U6IE5neE1lbnVJdGVtKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gZGF0ZUZucy5zdGFydE9mRGF5KG5ldyBEYXRlKCkpO1xuICAgICAgICBsZXQgZnJvbURhdGUgPSB0b2RheTtcbiAgICAgICAgbGV0IHRvRGF0ZSA9IHRvZGF5O1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5tZW51Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBpdGVtLmFsaWFzID09PSByYW5nZS5hbGlhcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgb3BlcmFuZCA9IHJhbmdlLm9wZXJhdGlvbi5jaGFyQXQoMCkgPT09ICctJyA/IC0xIDogMTtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gTWF0aC5hYnMocGFyc2VJbnQocmFuZ2Uub3BlcmF0aW9uLCAxMCkpO1xuICAgICAgICBjb25zdCBvcGUgPSByYW5nZS5vcGVyYXRpb24ubWF0Y2goL1tkLHcsbSx5XXQ/Lyk7XG4gICAgICAgIGNvbnN0IHVuaXQgPSBvcGUubGVuZ3RoID4gMCA/IG9wZVswXSA6ICcnO1xuXG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICAgICAgaWYgKGFtb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tRGF0ZSA9IGRhdGVGbnMuYWRkTW9udGhzKGZyb21EYXRlLCBhbW91bnQgKiBvcGVyYW5kKTtcbiAgICAgICAgICAgICAgICAgICAgdG9EYXRlID0gZGF0ZUZucy5hZGRNb250aHMoZnJvbURhdGUsIChhbW91bnQgLSAxKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlRnJvbSA9IGRhdGVGbnMuc3RhcnRPZk1vbnRoKGZyb21EYXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUbyA9IGRhdGVGbnMuZW5kT2ZNb250aCh0b0RhdGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICAgICAgaWYgKGFtb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tRGF0ZSA9IGRhdGVGbnMuYWRkV2Vla3MoZnJvbURhdGUsIGFtb3VudCAqIG9wZXJhbmQpO1xuICAgICAgICAgICAgICAgICAgICB0b0RhdGUgPSBkYXRlRm5zLmFkZFdlZWtzKGZyb21EYXRlLCAoYW1vdW50IC0gMSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUZyb20gPSBkYXRlRm5zLnN0YXJ0T2ZXZWVrKGZyb21EYXRlLCB7d2Vla1N0YXJ0c09uOiB0aGlzLm9wdGlvbnMuc3RhcnRPZldlZWt9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUbyA9IGRhdGVGbnMuZW5kT2ZXZWVrKHRvRGF0ZSwge3dlZWtTdGFydHNPbjogdGhpcy5vcHRpb25zLnN0YXJ0T2ZXZWVrfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd5JzpcbiAgICAgICAgICAgICAgICBpZiAoYW1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21EYXRlID0gZGF0ZUZucy5hZGRZZWFycyhmcm9tRGF0ZSwgYW1vdW50ICogb3BlcmFuZCk7XG4gICAgICAgICAgICAgICAgICAgIHRvRGF0ZSA9IGRhdGVGbnMuYWRkWWVhcnMoZnJvbURhdGUsIChhbW91bnQgLSAxKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlRnJvbSA9IGRhdGVGbnMuc3RhcnRPZlllYXIoZnJvbURhdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRvID0gZGF0ZUZucy5lbmRPZlllYXIodG9EYXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgICAgIGlmIChhbW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbURhdGUgPSBkYXRlRm5zLmFkZERheXMoZnJvbURhdGUsIGFtb3VudCAqIG9wZXJhbmQpO1xuICAgICAgICAgICAgICAgICAgICB0b0RhdGUgPSBkYXRlRm5zLmFkZERheXMoZnJvbURhdGUsIChhbW91bnQgLSAxKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlRnJvbSA9IGRhdGVGbnMuc3RhcnRPZkRheShmcm9tRGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVG8gPSBkYXRlRm5zLnN0YXJ0T2ZEYXkodG9EYXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIEZyb20gdG9kYXlcbiAgICAgICAgICAgIGNhc2UgJ210JzpcbiAgICAgICAgICAgICAgICBpZiAob3BlcmFuZCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbURhdGUgPSBkYXRlRm5zLnN1Yk1vbnRocyh0b2RheSwgYW1vdW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b0RhdGUgPSBkYXRlRm5zLmFkZE1vbnRocyh0b2RheSwgYW1vdW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVGcm9tID0gZnJvbURhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVG8gPSB0b0RhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd3dCc6XG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhbmQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21EYXRlID0gZGF0ZUZucy5zdWJXZWVrcyh0b2RheSwgYW1vdW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b0RhdGUgPSBkYXRlRm5zLmFkZFdlZWtzKHRvZGF5LCBhbW91bnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUZyb20gPSBmcm9tRGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVUbyA9IHRvRGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3l0JzpcbiAgICAgICAgICAgICAgICBpZiAob3BlcmFuZCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbURhdGUgPSBkYXRlRm5zLnN1YlllYXJzKHRvZGF5LCBhbW91bnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvRGF0ZSA9IGRhdGVGbnMuYWRkWWVhcnModG9kYXksIGFtb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlRnJvbSA9IGZyb21EYXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVRvID0gdG9EYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAob3BlcmFuZCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbURhdGUgPSBkYXRlRm5zLnN1YkRheXModG9kYXksIGFtb3VudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9EYXRlID0gZGF0ZUZucy5hZGREYXlzKHRvZGF5LCBhbW91bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVGcm9tID0gZnJvbURhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlVG8gPSB0b0RhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlRm5zLnN0YXJ0T2ZEYXkodGhpcy5kYXRlRnJvbSk7XG5cbiAgICAgICAgdGhpcy5yYW5nZSA9IHJhbmdlLmFsaWFzO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gICAgaGFuZGxlQmx1ckNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS5zcmNFbGVtZW50IHx8IGUudGFyZ2V0O1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhKDxFbGVtZW50PnRhcmdldCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXktbnVtJykpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gb3BlbiBjYWxlbmRhclxuICAgICAqL1xuICAgIHB1YmxpYyBvcGVuKG9wZW5lZDogJ2Zyb20nIHwgJ3RvJyA9ICdmcm9tJykge1xuICAgICAgICB0aGlzLnRvZ2dsZUNhbGVuZGFyKG51bGwsIG9wZW5lZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIGNsb3NlIGNhbGVuZGFyXG4gICAgICovXG4gICAgcHVibGljIGNsb3NlKCkge1xuICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byB0b2dnbGUgY2FsZW5kYXJcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlKCkge1xuICAgICAgICBpZiAoISF0aGlzLm9wZW5lZCkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXREYXRlKGRhdGU6IERhdGUgfCB7IHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF5OiBudW1iZXIgfSk6IERhdGUge1xuICAgICAgICBpZiAoIWRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZUZucy5zdGFydE9mRGF5KGRhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBPYmplY3QgJiYgZGF0ZS55ZWFyICYmIGRhdGUubW9udGggJiYgZGF0ZS5kYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlRm5zLnN0YXJ0T2ZEYXkobmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiJdfQ==