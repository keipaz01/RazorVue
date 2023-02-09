using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RazorVue.Pages
{
	public class Vue01Model : PageModel
	{
		private readonly ILogger<Vue01Model> _logger;

		public Vue01Model(ILogger<Vue01Model> logger)
		{
			_logger = logger;
		}

		public void OnGet()
		{

		}
	}
}