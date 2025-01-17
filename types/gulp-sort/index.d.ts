// Type definitions for gulp-sort 2.0
// Project: https://github.com/pgilad/gulp-sort
// Definitions by: Joe Skeen <https://github.com/joeskeen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/** Sort files in stream by path or any custom sort comparator */

import gulpUtil = require("gulp-util");

interface IOptions {
    /**
     * A function to compare two files.
     * Returns:
     * -1 if file1 should be before file2,
     * 0 if file1 is equivalent to file2, and
     * 1 if file1 should be after file2
     */
    comparator?: IComparatorFunction | undefined;
    /** Whether to sort in ascending order, default is true */
    asc?: boolean | undefined;
    /** Whether to use a custom sort function. */
    customSortFn?: (files: gulpUtil.File[], comparator?: IComparatorFunction) => gulpUtil.File[];
}

interface IComparatorFunction {
    /**
     * A function to compare two files.
     * Returns:
     * -1 if file1 should be before file2,
     * 0 if file1 is equivalent to file2, and
     * 1 if file1 should be after file2
     */
    (file1: gulpUtil.File, file2: gulpUtil.File): number;
}

/** Sort files in stream by path or any custom sort comparator */
declare function gulpSort(): NodeJS.ReadWriteStream;
declare function gulpSort(comparator: IComparatorFunction): NodeJS.ReadWriteStream;
declare function gulpSort(options: IOptions): NodeJS.ReadWriteStream;

declare namespace gulpSort {}

export = gulpSort;
