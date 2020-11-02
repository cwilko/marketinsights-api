# Market Insights product and API apps

Contents:
- API Connect configuration for Catalog "product" for MIO
- Config for 2 APIs (Market Insights Core API & Market Insights prediction API)
- Loopback Cloud Foundry application for Market Insights Core API

# Deployment

Pre-reqs:

Ensure APIC is installed:

```
npm install -g apic
```

To Edit APIC config:

```
apic edit
```

To Deploy APIC Catalog config

```
apic login --sso
apic config:set catalog=apic-catalog://apimanager.eu-gb.apiconnect.cloud.ibm.com/orgs/miol-prod/catalogs/api
apic publish 
```

To Deploy app

```
apic login --sso
apic config:set app=apic-app://apimanager.eu-gb.apiconnect.cloud.ibm.com/orgs/miol-prod/apps/marketinsights
apic apps:publish       # This will push the config to APIC and the loopback app to CF (incorrectly)
ibmcloud cf push        # This will push the loopback app to CF (correctly)
```

# Tips

- After a period of inactivity, APIC will become dormant. Access this url to re-enable the service instance: https://eu.apiconnect.ibmcloud.com/apim
- It will take 24 hrs after reactivation for the gateway to start working. 
- It may be necessary to redeploy the catalog and/or recreate the APIC tls-profile