import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const Balancecard = ({title, value}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-3xl font-bold text-gray-900">{value}</p>
            </CardContent>
        </Card>
    )
}

export default Balancecard