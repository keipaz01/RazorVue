export default {
    data() {
        return {
            message: 'Not found'
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
    `
};