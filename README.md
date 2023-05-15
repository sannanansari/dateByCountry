# DateByCountry

A Library which can tranform you date string into the any date by country to want.

## Use Case

> date: string = '01/01/2023' 

{{ date | dateByCountry: locale : options }}

`eg:- {{date | dateByCountry: 'en-UK' : 'yn-mn-dn-wl-hn-Mn-sn' }}`

## locale

[ISO code](http://www.lingoes.net/en/translator/langcode.htm)

## Options

In options we have the following `weekday, year, month, day, hour, minute, second`.

Year

    The representation of the year. Possible values are:
    "numeric" (e.g., 2012)
    "2-digit" (e.g., 12)

month

    The representation of the month. Possible values are:
    "numeric" (e.g., 3)
    "2-digit" (e.g., 03)
    "long" (e.g., March)
    "short" (e.g., Mar)
    "narrow" (e.g., M). Two months may have the same narrow style for some locales (e.g. May's narrow style is also M).

day

    The representation of the day. Possible values are:
    "numeric" (e.g., 1)
    "2-digit" (e.g., 01)

hour

    The representation of the hour. Possible values are "numeric", "2-digit".

minute

    The representation of the minute. Possible values are "numeric", "2-digit".

second

    The representation of the second. Possible values are "numeric","2-digit".

If you have to pass this to dateByCountry then just options first alphabet with value first alphabet

eg:- `eg:- {{date | dateByCountry: 'en-UK' : 'yn-mn-dn-wl-hn-Mn-sn' }}`

Example 

    yn - year with numeric
    mn - month with numeric
    dn - day with numeric
    wl - weekday with long
    hn - hours with numeric
    Mn - Minutes with numeric
    sn - second with numeric
    
Hours Format

    {{date | dateByCountry: 'en-UK' : 'yn-mn-dn-wl-hn-Mn-sn' : 'H-true' }}
    true :  12 hours format 
    false: 24 hours format

Reference:
    [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#specifications)
    
