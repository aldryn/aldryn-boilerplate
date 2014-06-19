Icons
==========

Markup
******

.. code-block:: html
    
    <span class="icon icon-{name}"></span>

* Icon classes cannot be directly combined with other components.
* They should not be used along with other classes on the same element. Instead, add a nested **span** and apply the icon classes to the **span**.
* We are using fontastic.me as a font service to generate our fontpacks. Icons can be defined there and accordingly the below style code should be used.
* **icon-left** is used when the the icon should have a right padding (space) to an element
* **icon-right** is used when the the icon should have a left padding (space) to an element



Style
*****

.. code-block:: scss

    @font-face {
        font-family:"icons";
        font-weight:normal;
        font-style: normal;
        src:url("../fonts/fontastic/aldrynfont.eot");
        src:url("../fonts/fontastic/aldrynfont.eot?#iefix") format("embedded-opentype"),
            url("../fonts/fontastic/aldrynfont.ttf") format("truetype"),
            url("../fonts/fontastic/aldrynfont.woff") format("woff"),
            url("../fonts/fontastic/aldrynfont.svg#orange") format("svg");
    }
    .icon,
    [data-icon]:before,
    [class^="icon-"]:before,
    [class*=" icon-"]:before { font:normal normal normal $icon-size "icons" !important;
        content:attr(data-icon);
        text-transform:none !important;
        speak:none;
        line-height: 1;
        position:relative; top:$icon-offset;
        @include inline-block();
        @include font-smoothing();
    }
    .icon-left { padding-right:$icon-space; }
    .icon-right { padding-left:$icon-space; }

    .icon-ask:before { content: "a"; }
    .icon-question:before {content:"b"; }
    .icon-basket:before { content:"c"; }
    .icon-arrowround-left:before { content: "1"; }
    .icon-arrowround-right:before { content: "2"; }
    .icon-arrow-top:before { content: "3"; }
    .icon-arrow-right:before { content: "4"; }
    .icon-arrow-bottom:before { content: "5"; }
    .icon-arrow-left:before { content: "6"; }
    .icon-form-checked:before { content: "7"; }
    .icon-search:before { content: "8"; }