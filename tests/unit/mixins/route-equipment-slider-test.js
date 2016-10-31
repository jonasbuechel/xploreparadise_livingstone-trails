import Ember from 'ember';
import RouteEquipmentSliderMixin from 'xpp-livingstone-trails/mixins/route-equipment-slider';
import { module, test } from 'qunit';

module('Unit | Mixin | route equipment slider');

// Replace this with your real tests.
test('it works', function(assert) {
  let RouteEquipmentSliderObject = Ember.Object.extend(RouteEquipmentSliderMixin);
  let subject = RouteEquipmentSliderObject.create();
  assert.ok(subject);
});
