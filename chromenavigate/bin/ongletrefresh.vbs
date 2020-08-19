set WshShell = WScript.CreateObject("WScript.Shell")
WshShell.SendKeys "%{TAB}"
WScript.Sleep 50
WshShell.SendKeys "^r"
