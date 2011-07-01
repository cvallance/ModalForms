using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace ModalForms.Controllers
{
    public abstract class BaseController : Controller
    {
        public JsonResult JsonNoContent()
        {
            Response.StatusCode = (int) HttpStatusCode.NoContent;
            return Json(null);
        }

        public JsonResult JsonError()
        {
            Response.StatusCode = 418;
            return Json(null);
        }
    }
}
