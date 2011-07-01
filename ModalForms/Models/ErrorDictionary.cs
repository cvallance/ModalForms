using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ModalForms.Models
{
    public class ErrorDictionary : Dictionary<string, IList<string>>
    {
        public void Add(string key, string message)
        {
            if (!ContainsKey(key))
                this[key] = new List<string>();

            this[key].Add(message);
        }
    }
}