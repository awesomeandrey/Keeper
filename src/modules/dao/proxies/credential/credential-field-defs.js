import CredentialFieldNames from "./credential-field-names";

import {FieldTypes, Patterns} from "../../../../constants";
import {Label} from "../../../translation/LabelService";

export default () => ({
    [CredentialFieldNames.NAME]: {
        label: Label.Field_Credential_Title,
        name: CredentialFieldNames.NAME,
        type: FieldTypes.TEXT,
        required: true
    },
    [CredentialFieldNames.FOLDER_ID]: {
        label: Label.Field_Credential_FolderId,
        name: CredentialFieldNames.FOLDER_ID,
        type: FieldTypes.PICKLIST
    },
    [CredentialFieldNames.USERNAME_OR_LOGIN]: {
        label: Label.Field_Credential_UsernameOrLogin,
        name: CredentialFieldNames.USERNAME_OR_LOGIN,
        type: FieldTypes.TEXT
    },
    [CredentialFieldNames.PASSWORD]: {
        label: Label.Field_Credential_Password,
        name: CredentialFieldNames.PASSWORD,
        type: FieldTypes.PASSWORD
    },
    [CredentialFieldNames.WEBSITE]: {
        label: Label.Field_Credential_Link,
        name: CredentialFieldNames.WEBSITE,
        type: FieldTypes.LINK,
        pattern: Patterns.Url
    },
});