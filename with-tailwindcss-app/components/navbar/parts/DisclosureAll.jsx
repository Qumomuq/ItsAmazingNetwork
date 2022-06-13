import React from 'react';
import LeftButtons from "./DisclosureParts/LeftButtons";
import Notification from "./DisclosureParts/Notification";
import UserSetting from "./DisclosureParts/UserSetting";
import MobileMenu from "./DisclosureParts/MobileMenu";
import {Disclosure} from "@headlessui/react";
import DisclosurePanel from "./DisclosureParts/DisclosurePanel";



const DisclosureAll = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({open  }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <LeftButtons/>
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <Notification/>
                                    <UserSetting></UserSetting>
                                </div>
                            </div>
                            <MobileMenu/>
                        </div>
                    </div>
                    <DisclosurePanel/>
                </>
            )}
        </Disclosure>
    );
};

export default DisclosureAll;
