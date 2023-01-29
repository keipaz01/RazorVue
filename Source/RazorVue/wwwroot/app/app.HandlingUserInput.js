export default {
    data() {
        return {
            message: 'Hello World!'
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
        },
        notify() {
            alert('navigation was prevented.')
        }
    },

    template: `
                  <h1>{{ message }}</h1>
                  <button @click.prevent="reverseMessage">Reverse Message</button> <!-- // Bind to a method/function. The @click syntax is short for v-on:click. -->
                  <button @click.prevent="message += '!'">Append "!"</button> <!-- Can also be an inline expression statement -->
                  <a href="https://vuejs.org" @click.prevent="notify"> <!-- Vue also provides modifiers for common tasks such as e.preventDefault() and e.stopPropagation() -->
                    A link with e.preventDefault()
                  </a>
    `,
    style: `
                    button, a {
                      display: block;
                      margin-bottom: 1em;
                    }
    `
};