import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';
import { ListBox } from 'shared/ui/ListBox/ListBox';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            <div>
                {t('Главная страница')}
                <div>aaaaaa</div>
                <HStack>
                    <div>ttttt</div>
                    <ListBox
                        defaultValue={'Выберети значение'}
                        onChange={(value: string) => {}}
                        value={undefined}
                        items={[
                            {value: "1", content:"a111"},
                            {value: "22", content:"a222", disabled: true},
                            {value: "33", content:"a333"},
                        ]}
                    />
                </HStack>
                <div>bbbbbb</div>
                <div>cccccc</div>
            </div>
        </Page>
    );
};

export default MainPage;
