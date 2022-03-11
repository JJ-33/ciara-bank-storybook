import SavingsSummary from './SavingsSummary.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Savings Summary',
  component: SavingsSummary,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
      fullname: {control:'text'},
      bsb:{control:'number'},
      accountNumber:{control:'number'},
      accountBalance:{contorl:'number'}
  }};
//     backgroundColor: { control: 'color' },
//     onClick: {},
//     size: {
//       control: { type: 'select' },
//       options: ['small', 'medium', 'large'],
//     },
//   },
// };

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SavingsSummary },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<SavingsSummary v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {};

