import { factory } from "@gooddata/gooddata-js";
import constants from "./constants";

export const sdk = factory();
sdk.config.setCustomDomain(constants.backend);

export const project = {
    //sdk,
    projectId: constants.projectId,
};
