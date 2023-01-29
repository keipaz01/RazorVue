const API_URL = `/api01`

export default {
    data: () => ({
        Results: null
    }),
    created() {
        this.fetchData()
    },
    methods: {
        async fetchData() {

            let formData = new FormData();

            formData.append('FirstName', '<script>John</script>');
            formData.append('LastName', 'Fucktard');

            const controller = new AbortController();
            let verificationToken = document.getElementsByName('__RequestVerificationToken')[0].value;
            const options = {
                method: 'POST',
                headers: {
                    /*"Content-Type": "application/x-www-form-urlencoded",*/ "RequestVerificationToken": verificationToken },
                signal: controller.signal,
                body: new URLSearchParams(formData)
                /*
                body: JSON.stringify({
                    FirstName: 'David',
                    LastName: 'Pollock'
                })                 
                 */
            };  

            const url = `${API_URL}`
            this.Results = await (await fetch(url, options)).json()
        },
        truncate(v) {
            const newline = v.indexOf('\n')
            return newline > 0 ? v.slice(0, newline) : v
        },
        formatDate(v) {
            return v.replace(/T|Z/g, ' ')
        }
    },

    template:
        (`
 <link rel="stylesheet" href="/app/app.FetchingData.js.css" />
  <h1>POST Example</h1>
  <p>Json: </p><code> {{ Results }} </code>
  <br/><br/>
  <p>Display all Result fields as a list: </p>
  <ul>
    <li>{{ Results?Results.FirstName:'' }}</li>
  </ul>
    `),
};