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

        public object Return9(object data)
        {
            return 9;
        }

        public async Task<object> Invoke(object data)
        {
            return 77;
        }
    }
}
