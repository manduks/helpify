ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
ServiceConfiguration.configurations.remove({
    service: 'twitter'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId  : '551868228287498',
    secret : '49112f5a6c9abbb9e585905a5f7b45d3'
});
ServiceConfiguration.configurations.insert({
    service    : 'twitter',
    consumerKey: 'SBdsNROyRbpQP2Bw6beUzw',
    secret     : 'V0CnmFNQSVE1AeFaWUAuVOjclGmkiGyJII3PIYtDDo'
});
