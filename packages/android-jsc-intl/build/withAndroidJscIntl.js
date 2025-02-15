"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
/**
 * Apply android-jsc-intl configuration for Expo SDK 42 projects.
 *
 * This plugin lets you access the `Intl` API in Android apps (without Hermes).
 */
const withAndroidJscIntl = (config) => {
    // Return the modified config.
    return config_plugins_1.withAppBuildGradle(config, config => {
        if (config.modResults.language === 'groovy') {
            config.modResults.contents = config.modResults.contents.replace('org.webkit:android-jsc:+', 'org.webkit:android-jsc-intl:+');
        }
        else {
            throw new Error('[@expo/config-plugins][withAndroidJscIntl] Cannot enable Intl in Android JSC app gradle because the build.gradle is not groovy.');
        }
        return config;
    });
};
exports.default = withAndroidJscIntl;
