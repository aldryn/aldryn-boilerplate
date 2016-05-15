import { noscript, setStorage, __RewireAPI__ as UtilsRewire } from '../../static/js/addons/utils';
import $ from 'jquery';

describe('noscript()', () => {
    it('should remove noscript class from document', () => {
        expect($(document)).not.toHaveClass('noscript');
        $(document).addClass('noscript');
        noscript();
        expect($(document)).not.toHaveClass('noscript');
    });
});

describe('setStorage()', () => {
    it('should return false if no token passed');
    it('should return false if no value passed');
    it('should return false if no token and no value passed');
    it('should return false if localstorage is not available', () => {
        UtilsRewire.__Rewire__('isStorageSupported', false);
        expect(setStorage('token', 'value')).toEqual(false);
    });

    it('should put something in localstorage if it is available');
});
