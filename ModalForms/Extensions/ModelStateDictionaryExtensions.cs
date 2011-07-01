using System.Web.Mvc;
using ModalForms.Models;

namespace ModalForms.Extensions
{
    public static class ModelStateDictionaryExtensions
    {
        public static ErrorDictionary GetErrorDictionary(this ModelStateDictionary modelState)
        {
            var errors = new ErrorDictionary();

            foreach (var model in modelState)
            {
                foreach (var error in model.Value.Errors)
                {
                    errors.Add(model.Key, error.ErrorMessage);
                }
            }

            return errors;
        }
    }
}