# fakecheckbox
Transform any checkbox (or element that you want) in a checkbox.

#### Usage

**Your HTML**
```html
<pre>
  <div style="background-color: #eee">
  	<p> What do you like most? </p>
  	<input type="checkbox" name="activities[]" value="playing" class="fake_checkbox" /> Playing
  	<input type="checkbox" name="activities[]" value="bananas" class="fake_checkbox" /> Eating bananas
  </div>
</pre>
```

**Your JS**
```jquery
$('.fake_checkbox').fakecheckbox();
```

Styling can be altered sending an object this way:
```jquery
var css = {padding: 10px};
$('.fake_checkbox').fakecheckbox({css});
```