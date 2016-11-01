import Ember from 'ember';
import CContactFormTextMixin from 'xpp-livingstone-trails/mixins/c-contact-form-text';
import { module, test } from 'qunit';

module('Unit | Mixin | c contact form text');

// Replace this with your real tests.
test('it works', function(assert) {
  let CContactFormTextObject = Ember.Object.extend(CContactFormTextMixin);
  let subject = CContactFormTextObject.create();
  assert.ok(subject);
});
