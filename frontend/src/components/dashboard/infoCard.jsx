import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const InfoCard = ({ children, title }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
               {children}
            </CardContent>
        </Card>
    )
}

export default InfoCard