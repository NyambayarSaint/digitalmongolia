module.exports = ({ env }) => ({
    upload: {
        provider: "google-cloud-storage",
        providerOptions: {
            serviceAccount: {
                type: "service_account",
                project_id: "digital-health-302412",
                private_key_id: "efce915a307934acde7e222323f1bb92fc89f510",
                private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDINB67BBJfj3il\n3G2Bb5C6xpX421QBAWFC0flPN/9/eGX7/1XNvtEgUhgPXk4HZs7DbxSoCiPBhuRx\nd2FeUR/FIHO4laCuYR3qFW6Xmga9dDLv8ANuWouZjasK9/LYdmu94VdRZD5Cp2qD\n3m+v0oztvEi4rO1G1k8GF/I1ruZUnjs6fP7g+shsXvgxVD2/a+dWR1RSbi5LB8A3\nYhX2684D01QWDxOueoEwRsQYuNupoEAc/IltUBUmKhc2+8WAMqjuopNUkTj++wHR\nAz+w21Y7ymA8N+vji8hTM5GIRjZSEuZFaHJDEzVL6A6It7tp0wQioWY3Pl6e/Z0L\niDhf4BUlAgMBAAECggEAPgf4JZYDY1x+01VTELHStCxnt22tv4n/6sZIawU8wvA5\nGTVqDo+7GDqXfduIbb6q/d7jFZXesk3rZkTJBII6R8fgUyb5XE53CFqPo6VzxSvF\nxJYnWf/wFSnR/1oIAo3eoDy741od+GULGcTH8kBYriiSl7Xs5u/sGEU/JOcGMt0v\nuLu4bKh23ZDP1bqC3AcyuRLkRH9G/rywBV3juLiv2CwpXcfm1uw6f5EU5WEEonXM\nAjdVugkn3BSuAcFrKwr2r69mNAdWf8K2dy+6OfDAGJb5xCz41twMeRGGZ45Cfp7P\n4zMk0f02kUGCvbGQgUjIUw1r3Qc2eNE7aouOPs4b2QKBgQDqXuPXTb6i8eVZ3PbI\n6hMUGhJ1UtQCrGna78stJUZKOr7Wes7Pxzw1OffOy/+n27iJhkTaVTkZ62ifEMKT\n6ecNiPETwNUlGD4DPeqZ9++exi85ebw55E/g0EIR6DSgWoxrdA7GbKpxWNdBoGG0\ncjpGI/1UtnadWojLmZyFiHcR6wKBgQDargSaXud7qQZL0mGicGnpMX7Ot79XsaHe\nsrNc0mXXfGDYWmjG1JJEc208EfmzPlrpPnNnkby9sPQF0pHivIS4fHxmCtPFv6QU\ndjk7Rad8isXCSq5c85lbTmwSTthmOavD43DrItu8Ol7Wpnj/MMQqflqogV8yp8dk\nS6IdEH2hLwKBgHkCkYVjQOEFILRrYIiQQ1WHuKwXHhxbRTSjxzYCHu7IsiwvsISb\njDy3N3nw3ome6wMm7noEsrztTVGD59NTW9cjM8ZNNEA46hvmZjElUPWbwlpcvpDt\nj0i2fsacLD/3QLVicRaGmOJ5Sns6AfiXWftJLc4Ff+zzB9qH78cKlOANAoGBAJkv\nr8/HzZaFqABzRqu43ahaYL9EXoh6ya6sNhM+29KgsWK9qoomHLRQu2OKIAYdFygu\n9D7IC5RCIh72C/XuI3bs1WPSD9mFztX6n0rTF2mZ+MCK+ivpBTO98ty8WMD7g0R8\nzfwZdh4cMZViFn6FVdWCn9VMkzhz6axrgwujIq5HAoGASFVyYp1NjZaA6Y2snjWu\nVwNpGArPEmky+10CQDtvICYfSy/6uVGG5QhuxvwGctqOD97pVM6Cw5CQc7LojBep\nXx9fELnx/GwVxEaz37sSE0ogWcxAeYKy/GVYbH6D1L3GfxRSnCuPxuqs+THcthmZ\nn2YT1TfK0/lex89u0/fCg0I=\n-----END PRIVATE KEY-----\n",
                client_email: "digital-health@digital-health-302412.iam.gserviceaccount.com",
                client_id: "117035586163835089338",
                auth_uri: "https://accounts.google.com/o/oauth2/auth",
                token_uri: "https://oauth2.googleapis.com/token",
                auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
                client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/digital-health%40digital-health-302412.iam.gserviceaccount.com"
            },
            bucketName: "digital-health",
            baseUrl: "https://storage.cloud.google.com/digital-health",
            basePath: "/",
            publicFiles: true,
        },
    },
})