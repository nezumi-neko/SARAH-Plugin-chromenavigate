set WshShell = WScript.CreateObject("WScript.Shell")
WshShell.SendKeys "^&"
WScript.Sleep 50
WshShell.SendKeys "^{TAB}"