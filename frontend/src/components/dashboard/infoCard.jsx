import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const InfoCard = ({ children, title }) => {
    const headerCard = (title) => (
        title === "" ? null : (<CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>)
    )

    return (
        <Card>
            {headerCard(title)}
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}

export default InfoCard