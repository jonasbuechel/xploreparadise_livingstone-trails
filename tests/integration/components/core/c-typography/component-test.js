import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('core/c-typography', 'Integration | Component | core/c typography', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{core/c-typography}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#core/c-typography}}
      template block text
    {{/core/c-typography}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
