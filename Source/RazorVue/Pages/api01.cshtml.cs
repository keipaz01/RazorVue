using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;

namespace RazorVue.Pages
{
    public class Model 
    {
        public string FirstName = "asdf";
        public string LastName = "adsf";
    }
	public class Api01 : PageModel
	{
        Model model = new Model();

		public Api01()
		{
		}

        public string ToJson()
        {
            var settings = new JsonSerializerSettings
            {
                StringEscapeHandling = StringEscapeHandling.EscapeHtml,
            };
            string JSONString = string.Empty;
            JSONString = JsonConvert.SerializeObject(model, Formatting.None, settings);
            return JSONString;
        }

        public HtmlString ToJsonHtml()
        {
            return new HtmlString(ToJson());
        }

        public HtmlString Output() 
		{ 
            return ToJsonHtml();
		}

		public void OnGet()
		{
		}

		public IActionResult OnPostAsync()
		{
            //model = JsonConvert.DeserializeObject<Model>(Request.Form.Keys.FirstOrDefault()!)!;
            model.FirstName = Request.Form["FirstName"];
            model.LastName = Request.Form["LastName"];
            return Content(ToJson());
        }
	}
}