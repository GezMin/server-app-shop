import {
	Body,
	Controller,
	Get,
	HttpCode,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'

import { OrderDto } from './dto/order.dto'
import { OrderService } from './order.service'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { CurrentUser } from 'src/auth/decorators/user.decorators'

@Controller('orders')
export class OrderController {
	constructor(private readonly orderService: OrderService) {}

	@Get()
	@Auth()
	getAll() {
		return this.orderService.getAll()
	}

	@Get('by-user')
	@Auth()
	getByUserId(@CurrentUser('id') userId: string) {
		return this.orderService.getByUserId(userId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	@Auth()
	placeOrder(@Body() dto: OrderDto, @CurrentUser('id') userId: string) {
		return this.orderService.placeOrder(dto, userId)
	}
}
