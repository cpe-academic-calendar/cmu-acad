import { CheckmarkRadio, ConditionComponent, ConditionForm, ConditionHead, ConditionLayout, CreateEvent, EventName } from "./ConditionEdit.styled"
import CloseIcon from '@mui/icons-material/Close';

const ConditionEdit: React.FC = () => {
    return (
        <div className="grid place-items-center h-screen">
            <ConditionLayout>
                <ConditionHead>
                    <div>กำหนดการสำคัญ</div>
                    <div><CloseIcon /></div>
                </ConditionHead>
                <ConditionComponent>
                    <ConditionForm className="flex-box">
                        <div>
                            <label className="mb-3">ชื่อ</label>
                        </div>
                        <div>
                            <EventName type="text" name="name" className="border rounded-full mb-3 p-2 " placeholder="ชื่อ" />
                        </div>
                        <div>
                            <label className="mb-3">สถานะ</label>
                        </div>
                        <div className='flex gap-3'>
                            <div className="flex gap-3">
                                <CheckmarkRadio type="radio" name="event" className="border rounded-full mb-3 p-2 " placeholder="กำหนดการ" />
                                <label>กำหนดการ</label>
                            </div>
                            <div className="flex gap-3">
                                <CheckmarkRadio type="radio" name="event" className="border rounded-full mb-3 p-2 " placeholder="วันหยุด" />
                                <label>วันหยุด</label>
                            </div>
                            <div className="flex gap-3">
                                <CheckmarkRadio type="radio" name="event" className="border rounded-full mb-3 p-2 " placeholder="วันสอบ" />
                                <label>วันสอบ</label>
                            </div>
                        </div>
                        <label>ระยะเวลา</label>
                        <div className='flex gap-8 mt-4'>
                            <div className="flex gap-3">
                                <CheckmarkRadio type="radio" name="event" className="border rounded-full mb-3 p-2 " placeholder="กำหนดการ" />
                                <label>วันเดียว</label>
                            </div>
                            <div className="flex gap-3">
                                <CheckmarkRadio type="radio" name="event" className="border rounded-full mb-3 p-2 " placeholder="วันหยุด" />
                                <label>หลายวัน</label>
                            </div>
                        </div>
                        <div className="grid justify-end" >
                            <CreateEvent type="submit" className="border rounded-full" value="CreateEvent">
                                บันทึก
                            </CreateEvent>
                        </div>
                    </ConditionForm>
                </ConditionComponent>
            </ConditionLayout>
        </div>)
}

export default ConditionEdit;