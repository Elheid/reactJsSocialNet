import Message from "../../../classes/message";

export const MessageSideBarComponent = () => {
    const avatar = Message._defaultAvatarImg;
    return (
        <div className="fixed-sidebar right boxOfContent">
            <div className="fixed-sidebar-right sidebar--small" id="sidebar-right">
                <div className="mCustomScrollbar ps ps--theme_default" data-mcs-theme="dark" data-ps-id="c4badb1f-c053-ead8-4269-d80e5fe1ccf6">
                    <ul className="chat-users">
                        <li className="inline-items js-chat-open">
                            <div className="author-thumb">
                                <img loading="lazy" alt="author" src={avatar} className="avatar" width="34" height="34" />
                                <span className="icon-status away"></span>
                            </div>
                        </li>
                        <li className="inline-items js-chat-open">
                            <div className="author-thumb">
                                <img loading="lazy" alt="author" src={avatar} className="avatar" width="34" height="34" />
                                <span className="icon-status online"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}