import SavingsTarget from './SavingsTarget.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Savings Target',
  component: SavingsTarget,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
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
  components: { SavingsTarget },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<SavingsTarget v-bind="args" />',
});

const defaultTarget = {goal:"New Iphone",current:520,target:1200}



export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    target: defaultTarget
};