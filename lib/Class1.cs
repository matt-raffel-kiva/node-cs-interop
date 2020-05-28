using System;
using System.Runtime.InteropServices;
using RGiesecke.DllExport;

namespace lib
{
    public class ExportedExample
    {
        [DllExport("add", CallingConvention = CallingConvention.Cdecl)]
        public static int Add(int left, int right)
        {
            return left + right;
        }
    }
}
