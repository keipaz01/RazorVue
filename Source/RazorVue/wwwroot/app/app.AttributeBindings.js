export default {
    data() {
        return {
            message: 'Hello World!',
            isRed: true,
            color: 'green'
        }
    },
    methods: {
        toggleRed() {
            this.isRed = !this.isRed
        },
        toggleColor() {
            this.color = this.color === 'green' ? 'blue' : 'green'
        }
    },

    template:
        (`
      <link rel="stylesheet" href="/app/app.AttributeBindings.js.css" />
      <p>
        <span :title="message"> 
          Hover your mouse over me for a few seconds 
            to see my dynamically bound title!
        </span>
      </p>

      <p :class="{ red: isRed }" @click="toggleRed">        <!-- class bindings have special support for objects and arrays in addition to plain strings -->
        This should be red... but click me to toggle it.
      </p>

      <p :style="{ color }" @click="toggleColor">           <!-- style bindings also support object and arrays -->
        This should be green, and should toggle 
            between green and blue on click.
      </p>
    `),
};