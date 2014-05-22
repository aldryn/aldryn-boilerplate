Forms
=====

Markup
******

.. code-block:: html

    <form action="." method="post" class="form" role="form">
        <fieldset>
            <ol>
                <!-- block example -->
                <div class="form-group">
                    <label class="label" for="field-name">Name</label>
                    <div class="field">
                        <input type="text" id="field-name" class="input-text" />
                    </div>
                </div>
                <!-- inline example -->
                <div class="form-group">
                    <div class="label"><span class="visuallyhidden">Name</span></div>
                    <div class="field">
                        <label><input type="text" class="input-text" /></label>
                    </div>
                </div>
        </fieldset>
        <fieldset>
                <!-- multiple elements example -->
                <div class="checkbox">
                    <label><input type="checkbox" /> Apple</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" /> Orange</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" /> Banana</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" /> Peach</label>
                </div>
        </fieldset>

        <!-- button example -->
        <fieldset>
                    <div class="label"><!-- no text required --></div>
                    <div class="field">
                        <label><input type="submit" class="btn" value="Submit" /></label>
                    </div>
        </fieldset>
    </form>

We need to ensure that a label is always associated with an input element. Whenever this is not possible we should
use a div with the class ``.label`` to style it as label.

Use the ``fieldset`` element to create a grid and separate blocks where required. For example
``<fieldset class="col-md-12"> ... </fieldset>``.

Grid Classes as per http://getbootstrap.com/css/#grid

Detailed information about the inner form elements can be found on the styleguide:
http://standardsite-dev.divio.ch/en/styleguide/#page-forms

