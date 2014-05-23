Forms
=====

Markup
******

.. code-block:: html

    <!-- block example -->
    <form action="." method="post" class="form" role="form">
        <fieldset>
                <div class="form-group">
                    <label class="control-label" for="field-name">Name</label>
                    <input type="text" id="field-name" class="form-control" placeholder="Name" />
                </div>
        </fieldset>
    </form>
    
    <!-- inline example -->
    <form action="." method="post" class="form-inline" role="form">
        <fieldset>
            <div class="form-group">
                <label class="sr-only" for="inlineEmail">Email address</label>
                <input type="email" class="form-control" id="inlineEmail" placeholder="Enter email">
            </div>
        <div class="form-group">
            <label class="sr-only" for="inlinePassword">Password</label>
            <input type="password" class="form-control" id="inlinePassword" placeholder="Password">
        </div>
        <div class="checkbox">
            <label><input type="checkbox"> Remember me</label>
        </div>
            <button type="submit" class="btn btn-default">Sign in</button>
    </fieldset>
    </form>

    <!-- multiple elements example -->
    <form action="." method="post" class="form" role="form">
        <fieldset>
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
    </form>

    <!-- multiple inline checkbox elements example -->
    <form action="." method="post" class="form" role="form">
        <fieldset>
            <label class="checkbox-inline">
                <input type="checkbox" value="option1"> Apple
            </label>
            <label class="checkbox-inline">
                <input type="checkbox" value="option2"> Orange
            </label>
            <label class="checkbox-inline">
                <input type="checkbox" value="option3"> Banana
            </label>
        </fieldset>
    </form>


    <!-- multiple inline radio elements example -->
    <form action="." method="post" class="form" role="form">
        <fieldset>
            <label class="radio-inline">
                <input type="radio" value="option1"> Apple
            </label>
            <label class="radio-inline">
                <input type="radio" value="option2"> Orange
            </label>
            <label class="radio-inline">
                <input type="radio" value="option3"> Banana
            </label>
        </fieldset>
    </form>


    <!-- button example -->
    <form action="." method="post" class="form" role="form">
        <fieldset>
            <label><!-- no text required --></label>
            <div class="form-group">
                <input type="submit" class="btn btn-default" value="Submit" />
            </div>
        </fieldset>
    </form>

    <!-- Standard button -->
    <button type="button" class="btn btn-default">Default</button>

    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
    <button type="button" class="btn btn-primary">Primary</button>


Screen readers will have trouble with your forms if you don't include a label for every input. For these inline forms, you can hide the labels using the ``.sr-only`` class.
If we can't associate a label to all input element we should use a div with the class ``.label`` to style it as label.


Use the ``fieldset`` element to create a grid and separate blocks where required. For example
``<fieldset class="col-md-12"> ... </fieldset>``.

Grid Classes as per http://getbootstrap.com/css/#grid

Detailed information about the inner form elements can be found on the styleguide:
http://standardsite-dev.divio.ch/en/styleguide/#page-forms

