import Ember from 'ember';
import ComponentBackgroundImageMixin from 'xpp-livingstone-trails/mixins/component-background-image';
import { module, test } from 'qunit';

module('Unit | Mixin | component background image');

// Replace this with your real tests.
test('it works', function(assert) {
  let ComponentBackgroundImageObject = Ember.Object.extend(ComponentBackgroundImageMixin);
  let subject = ComponentBackgroundImageObject.create();
  assert.ok(subject);
});
