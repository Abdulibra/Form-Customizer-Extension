Connect-PnPOnline -url "https://devtest2019.sharepoint.com/sites/Ishstar" -UseWebLogin
$clientContext = Get-PnPContext
$contentType = Get-PnPContentType -List "Ishstar" -Identity "WorkOrder"
$contentType.DisplayFormClientSideComponentId = "17405b72-ff7b-414a-bd6a-0286cb2e63aa";
$contentType.NewFormClientSideComponentId = "17405b72-ff7b-414a-bd6a-0286cb2e63aa";
$contentType.EditFormClientSideComponentId = "17405b72-ff7b-414a-bd6a-0286cb2e63aa";
$contentType.Update($false)
$clientContext.ExecuteQuery()