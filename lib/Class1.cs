using System;
using System.Threading.Tasks;

namespace lib
{
    public class Startup
    {
        public int Add(int left, int right)
        {
            return left + right;
        }

        public async Task<object> ReturnNumbers(object data)
        {
            return (int)data * -1;
        }

        public async Task<object> Invoke(object data)
        {
            return 77;
        }

        public async Task<object> SomeMixedData(object data)
        {
            return "{\"name\":\"bob\",\"account\":5000}";
        }
    }
}
